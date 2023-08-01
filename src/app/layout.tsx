import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("@/components/Navigation/Navigation"));

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
