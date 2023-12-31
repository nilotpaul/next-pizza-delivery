import { FC, cache } from "react";
import { menuItems } from "@prisma/client";
import { prisma } from "@/lib/db/PrismaClient";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Buynow from "./Buynow";
import { Metadata } from "next";

import styles from "./item.module.css";

export async function generateMetadata({
  params: { item },
}: {
  params: { item: string };
}): Promise<Metadata> {
  const data = prisma.menuItems.findUniqueOrThrow({
    where: { id: item },
  });

  if (!item) {
    return {
      title: "Not Found",
      description: "page not found",
    };
  } else {
    return {
      metadataBase: new URL("https://next-pizza-delivery.vercel.app"),
      openGraph: {
        images: [{ url: (await data).image, alt: (await data).name }],
      },
    };
  }
}

type ItemProps = {
  params: { item: string };
};

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Params[]> {
  const items = await prisma.menuItems.findMany({
    orderBy: { id: "asc" },
  });

  return items.map((item) => ({
    item: item.id,
  }));
}

const getItem = cache(async (item: string): Promise<menuItems> => {
  try {
    const data = await prisma.menuItems.findUniqueOrThrow({
      where: { id: item.toString().toLowerCase() },
    });

    return data;
  } catch (err) {
    console.log(err);
    throw new Error("couldn't get the [item]");
  }
});

const Item: FC<ItemProps> = async ({ params: { item } }) => {
  const { id, name, price, image } = await getItem(item);

  return (
    <div className={styles.item}>
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        priority
        quality={100}
      />
      <div className={styles.info}>
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          nostrum quis illum officia repellat incidunt. Placeat recusandae
          numquam in corporis.
        </p>
        <span>$ {price}</span>
        <Buynow id={id} />
      </div>
    </div>
  );
};

export default Item;
