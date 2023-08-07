import { FC } from "react";

import { prisma } from "@/lib/db/PrismaClient";
import { menuItems } from "@prisma/client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Pacifico } from "next/font/google";
const Addtocart = dynamic(() => import("@/app/(Home)/Addtocart"));

import loader from "../../../loader";

import styles from "./styles/food.module.css";

const pacifico = Pacifico({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

async function getData(): Promise<menuItems[]> {
  try {
    const res = await prisma.menuItems.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("couldn't the get data from db");
  }
}

const Food: FC = async () => {
  const pizza = await getData();

  return (
    <div className={styles.food}>
      <span className={pacifico.className} id={styles.specials}>
        Specials For You
      </span>
      <h1 id={styles.popular__h1}>Popular Dishes</h1>
      <div className={styles.pizza}>
        {pizza.map((items) => {
          return (
            <div key={items.id} className={styles.items}>
              <Link href={`/menu/pizza/${items.id}`}>
                <Image
                  loader={loader}
                  className={styles.pizza__img}
                  src={items.image}
                  alt={items.name}
                  width={250}
                  height={250}
                />
                <h3>{items.name}</h3>
                <span>$ {items.price}</span>
              </Link>
              <Addtocart id={items.id} />
            </div>
          );
        })}
      </div>
      <Link className={styles.explore} href="/menu">
        Explore More
      </Link>
    </div>
  );
};

export default Food;
