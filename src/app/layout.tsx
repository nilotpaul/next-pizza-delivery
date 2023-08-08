import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/app/globals.css";
import "remixicon/fonts/remixicon.css";
import NextSessionProvider from "@/context/SessionProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "PizzaRio",
    template: `%s | PizzaRio`,
  },
  description:
    "Indulge in Pizza Bliss at Pizzario - Your Ultimate Destination for Pizza Enthusiasts! Discover a symphony of pizza flavors, recipes, and stories that will tantalize your taste buds. From classic favorites to creative concoctions, Pizzario is your virtual pizzeria. Join us for a slice of culinary delight and embark on a flavorful journey through the world of pizzas. Savor every moment with our pizza-inspired content, and let your love for this iconic dish flourish at Pizzario!",
  keywords: [
    "Pizza delivery",
    "Online ordering",
    "Fresh ingredients",
    "Fast delivery",
    "Customizable pizzas",
    "Gourmet toppings",
    "Contactless delivery",
    "Special deals",
    "Family-sized pizzas",
    "Late-night delivery",
    "Quality ingredients",
    "Fast and fresh",
  ],
  authors: [{ name: "Nilotpaul", url: "https://github.com/nilotpaul" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextSessionProvider>
          <main>{children}</main>
        </NextSessionProvider>
      </body>
    </html>
  );
}
