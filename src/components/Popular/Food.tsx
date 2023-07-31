import { FC } from "react";

import { prisma } from "@/lib/db/PrismaClient";
import { menuItems } from "@prisma/client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const Addtocart = dynamic(() => import("@/app/(Home)/Addtocart"));

import styles from "./styles/food.module.css";

const pacifico = Pacifico({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const Food: FC = async () => {
  const pizza = await prisma.menuItems.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className={styles.food}>
      <span className={pacifico.className} id={styles.specials}>
        Specials For You
      </span>
      <h1 id={styles.popular__h1}>Popular Dishes</h1>
      <div className={styles.pizza}>
        {pizza.map((items: menuItems) => {
          return (
            <div key={items.id} className={styles.items}>
              <Link href="#">
                <Image
                  className={styles.pizza__img}
                  src={items.image}
                  alt={items.name}
                  width={250}
                  height={250}
                />
                <h3>{items.name}</h3>
                <span>$ {items.price}</span>
              </Link>
              <Addtocart />
            </div>
          );
        })}
      </div>
      <Link className={styles.explore} href="#">
        Explore More
      </Link>
    </div>
  );
};

export default Food;
