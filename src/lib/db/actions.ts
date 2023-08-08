"use server";

import { revalidatePath } from "next/cache";
import { createCart, getCart } from "./Cart";
import { prisma } from "./PrismaClient";

export async function add(id: string) {
  const cart = (await getCart()) ?? (await createCart());

  const index = cart.CartItems.find((item) => item.ItemId === id);

  if (index) {
    await prisma.cartItems.update({
      where: { id: index.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItems.create({
      data: {
        cartId: cart.id,
        ItemId: id,
        quantity: 1,
      },
    });
  }

  revalidatePath("/");
  revalidatePath("/cart");
}
