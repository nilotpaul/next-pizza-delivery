import { FC } from "react";

import Image from "next/image";
import loader from "../../../../loader";
import { prisma } from "@/lib/db/PrismaClient";
import Link from "next/link";

import styles from "./menu.module.css";

const Menu: FC = async () => {
  const data = await prisma.menuItems.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className={styles.menu}>
      <div className={styles.pizza}>
        <div className={styles.img}>
          <Image
            src="/next-pizza-delivery-app/pizza6_coany1.jpg"
            alt="Pizza Banner"
            height={480}
            width={480}
            loader={loader}
            priority
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
                      loader={loader}
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
