"use server";

import { createCart, getCart } from "@/lib/db/Cart";
import { prisma } from "@/lib/db/PrismaClient";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function setQty(id: string, newQty: number) {
  const cart = (await getCart()) ?? (await createCart());

  const inCartItem = cart.CartItems.find((item) => item.ItemId === id);

  if (inCartItem) {
    if (newQty === 0) {
      await prisma.cartItems.delete({
        where: { id: inCartItem.id },
      });
    } else {
      await prisma.cartItems.update({
        where: { id: inCartItem.id },
        data: { quantity: newQty },
      });
    }
  }

  revalidatePath("/cart");
}

export async function removeItem(qty: number, id: string) {
  const cart = await getCart();

  const inCartItem = cart?.CartItems.find((item) => item.ItemId === id);

  if (cart) {
    if (qty > 0) {
      if (inCartItem) {
        await prisma.cartItems.delete({
          where: { id: inCartItem.id },
        });
      }
    }
  }

  revalidatePath("/cart");
}

export async function clearAll() {
  const cart = await getCart();

  if (cart) {
    await prisma.$transaction([
      prisma.cartItems.deleteMany({
        where: { cartId: cart.id },
      }),
      prisma.cart.delete({
        where: { id: cart.id },
      }),
    ]);

    cookies().delete("localCart");
  }

  revalidatePath("/cart");
}
