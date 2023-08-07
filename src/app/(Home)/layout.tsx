import Navigation from "@/components/Navigation/Navigation";

import "remixicon/fonts/remixicon.css";
import Footer from "@/components/Footer/Footer";
import NextSessionProvider from "@/context/SessionProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../(Auth)/api/auth/[...nextauth]/route";
import { getCart } from "@/lib/db/Cart";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const cart = await getCart();
  return (
    <div>
      <NextSessionProvider>
        <Navigation session={session} cart={cart} />
        <main className="container">{children}</main>
        <footer className="footer">
          <Footer />
        </footer>
      </NextSessionProvider>
    </div>
  );
}
