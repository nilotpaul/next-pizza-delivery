import { FC } from "react";

import { Metadata } from "next";
import Image from "next/image";
import { prisma } from "@/lib/db/PrismaClient";
import Link from "next/link";
import getBase64 from "@/lib/blurdataurl/Base64";

import styles from "./menu.module.css";

export const metadata: Metadata = {
  title: "Menu",
};

const Menu: FC = async () => {
  const data = await prisma.menuItems.findMany({
    orderBy: { name: "asc" },
  });

  const blurDataUrl = await getBase64(
    "https://res.cloudinary.com/dtxry2kma/image/upload/v1690642886/next-pizza-delivery-app/pizza6_coany1.jpg"
  );

  return (
    <div className={styles.menu}>
      <div className={styles.pizza}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/dtxry2kma/image/upload/v1690642886/next-pizza-delivery-app/pizza6_coany1.jpg"
            alt="Pizza Banner"
            height={480}
            width={480}
            priority
            blurDataURL={blurDataUrl}
            placeholder="blur"
          />
          <Link href="/menu/pizza">Order Now</Link>
        </div>
        <div className={styles.items}>
          {data
            .map((items) => {
              return (
                <>
                  <Link key={items.id} href={`/menu/pizza/${items.id}`}>
                    <Image
                      src={items.image}
                      alt={items.name}
                      height={100}
                      width={100}
                    />
                  </Link>

                  <div className={styles.info}>
                    <h3>{items.name}</h3>
                    <span>$ {items.price}</span>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </>
              );
            })
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default Menu;
