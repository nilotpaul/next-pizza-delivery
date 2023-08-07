import { prisma } from "@/lib/db/PrismaClient";
import { NextAuthOptions } from "next-auth/";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { env } from "@/lib/auth/env";
import { Adapter } from "next-auth/adapters";
import { mergeCart } from "@/lib/db/Cart";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,

  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },

  events: {
    async signIn({ user }) {
      await mergeCart(user.id);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
