import { Prisma } from "@prisma/client";
import { DefaultSession } from "next-auth";

export type CartItems = Prisma.CartGetPayload<{
  include: { CartItems: { include: { Item: true } } };
}>;

export type Cart = CartItems & {
  qty: number;
  subtotal: number;
};

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
