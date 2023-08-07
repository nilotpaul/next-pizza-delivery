import { FC } from "react";
import { prisma } from "@/lib/db/PrismaClient";
import Image from "next/image";
import loader from "../../../../../loader";
import Link from "next/link";

import styles from "./pizza.module.css";
import Addtocart from "../../Addtocart";

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
                  loader={loader}
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
