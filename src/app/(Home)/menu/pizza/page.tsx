import { FC } from "react";
import { prisma } from "@/lib/db/PrismaClient";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Addtocart from "../../Addtocart";

import styles from "./pizza.module.css";

export const metadata: Metadata = {
  title: "Pizza",
};

const Pizza: FC = async () => {
  const data = await prisma.menuItems.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className={styles.pizza}>
      <div className={styles.menu}>
        {data.map((items) => {
          return (
            <div key={items.id} className={styles.items}>
              <Link href={`pizza/${items.id}`}>
                <Image
                  className={styles.img}
                  src={items.image}
                  alt={items.name}
                  width={250}
                  height={250}
                />
              </Link>
              <h3>{items.name}</h3>
              <span>$ {items.price}</span>
              <Addtocart id={items.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pizza;
