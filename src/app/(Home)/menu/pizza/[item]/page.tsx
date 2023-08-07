import { FC } from "react";
import { menuItems } from "@prisma/client";
import { prisma } from "@/lib/db/PrismaClient";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import loader from "../../../../../../loader";
import Buynow from "./Buynow";

import styles from "./item.module.css";

export const dynamicParams = false;

type ItemProps = {
  params: { item: string };
};

export async function generateStaticParams(): Promise<Params[]> {
  const items = await prisma.menuItems.findMany({
    orderBy: { id: "asc" },
  });

  return items.map((item) => ({
    item: item.id,
  }));
}

async function getItem(item: string): Promise<menuItems> {
  try {
    const data = await prisma.menuItems.findUniqueOrThrow({
      where: { id: item.toString().toLocaleLowerCase() },
    });

    return data;
  } catch (err) {
    console.log(err);
    throw new Error("couldn't get the [item]");
  }
}

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
        loader={loader}
        quality={100}
      />
      <div className={styles.info}>
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          nostrum quis illum officia repellat incidunt. Placeat recusandae
          numquam in corporis.
        </p>
        <Buynow id={id} />
        <span>$ {price}</span>
      </div>
    </div>
  );
};

export default Item;
