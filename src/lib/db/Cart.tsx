import { Cart as cartTypes, CartItems as CartItemsTypes } from "@/Types/types";
import { prisma } from "./PrismaClient";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(Auth)/api/auth/[...nextauth]/route";
import { Cart, CartItems } from "@prisma/client";

export async function getCart(): Promise<cartTypes | null> {
  const session = await getServerSession(authOptions);

  let cart: CartItemsTypes | null = null;

  try {
    if (session) {
      cart = await prisma.cart.findFirst({
        where: { userId: session.user.id },
        include: { CartItems: { include: { Item: true } } },
      });
    } else {
      const localCartId = cookies().get("localCart")?.value;
      cart = localCartId
        ? await prisma.cart.findUnique({
            where: {
              id: localCartId,
            },
            include: {
              CartItems: { include: { Item: true } },
            },
          })
        : null;
    }
  } catch (err) {
    console.log(err);
    throw new Error("couldn't create cart");
  }

  if (!cart) {
    return null;
  }

  return {
    ...cart,
    qty: cart.CartItems.reduce((total, items) => total + items.quantity, 0),
    subtotal: cart.CartItems.reduce(
      (total, items) => total + items.quantity * items.Item.price,
      0
    ),
  };
}

export async function createCart(): Promise<cartTypes> {
  const session = await getServerSession(authOptions);

  let cart: Cart;

  try {
    if (session) {
      cart = await prisma.cart.create({
        data: { userId: session.user.id },
      });
    } else {
      cart = await prisma.cart.create({
        data: {},
      });

      // encrypt cookies
      cookies().set("localCart", cart.id);
    }

    return {
      ...cart,
      CartItems: [],
      qty: 0,
      subtotal: 0,
    };
  } catch (err) {
    console.log(err);
    throw new Error("couldn't create a cart");
  }
}

export async function mergeCart(id: string) {
  const localCartId = cookies().get("localCart")?.value;

  const lCart = localCartId
    ? await prisma.cart.findUnique({
        where: {
          id: localCartId,
        },
        include: {
          CartItems: true,
        },
      })
    : null;

  if (!lCart) {
    return null;
  }

  const dbCart = await prisma.cart.findFirst({
    where: { userId: id },
    include: {
      CartItems: true,
    },
  });

  await prisma.$transaction(async (tx) => {
    if (dbCart) {
      const mergedCartItems = mergeCartLogic(lCart.CartItems, dbCart.CartItems);

      await tx.cartItems.deleteMany({
        where: { cartId: dbCart.id },
      });

      await tx.cartItems.createMany({
        data: mergedCartItems.map((items) => ({
          cartId: dbCart.id,
          ItemId: items.ItemId,
          quantity: items.quantity,
        })),
      });
    } else {
      await tx.cart.create({
        data: {
          userId: id,
          CartItems: {
            createMany: {
              data: lCart.CartItems.map((items) => ({
                ItemId: items.ItemId,
                quantity: items.quantity,
              })),
            },
          },
        },
      });
    }

    await tx.cart.delete({
      where: { id: lCart.id },
    });

    cookies().delete("localCart");
  });
}

function mergeCartLogic(...cartItems: CartItems[][]) {
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.ItemId === item.ItemId);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    });

    return acc;
  }, [] as CartItems[]);
}
