import { getData } from "@/components/Popular/Food";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getData();
  const items =
    data.map((items) => {
      return {
        url: `https://next-pizza-delivery.vercel.app/menu/pizza/${items.name}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: "https://next-pizza-delivery.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://next-pizza-delivery.vercel.app/menu",
      lastModified: new Date(),
    },
    {
      url: "https://next-pizza-delivery.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://next-pizza-delivery.vercel.app/contact",
      lastModified: new Date(),
    },
    {
      url: "https://next-pizza-delivery.vercel.app/menu/pizza",
      lastModified: new Date(),
    },
    {
      url: "https://next-pizza-delivery.vercel.app/cart",
      lastModified: new Date(),
    },
    {
      url: "https://next-pizza-delivery.vercel.app/signin",
      lastModified: new Date(),
    },
    {
      url: "https://next-pizza-delivery.vercel.app/signout",
      lastModified: new Date(),
    },
    ...items,
  ];
}
