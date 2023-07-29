import { FC } from "react";
import Image from "next/image";

import styles from "./styles/popular.module.css";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const Popular: FC = () => {
  return (
    <div className={styles.popular}>
      <span className={pacifico.className} id={styles.specials}>
        Specials For You
      </span>
      <h1>Popular Dishes</h1>
      <div className={styles.categories}>
        <ul className={styles.category}>
          <li className={styles.pizza}>
            <Image
              src="/next-pizza-delivery-app/pizza-cat.png"
              alt="Pizza"
              height={90}
              width={90}
            />
            <span>PIZZA</span>
          </li>
          <li className={styles.combo}>
            <Image
              src="/next-pizza-delivery-app/combo-cat.png"
              alt="Combo"
              height={100}
              width={100}
            />
            <span>Combo</span>
          </li>
          <li className={styles.snacks}>
            <Image
              src="/next-pizza-delivery-app/snacks-cat.png"
              alt="Snacks"
              height={100}
              width={100}
            />
            <span>Snacks</span>
          </li>
          <li className={styles.desserts}>
            <Image
              src="/next-pizza-delivery-app/dessert-cat.png"
              alt="Desserts"
              height={100}
              width={100}
            />
            <span>Desserts</span>
          </li>
          <li className={styles.breverages}>
            <Image
              src="/next-pizza-delivery-app/breverage-cat.png"
              alt="Breverages"
              height={80}
              width={80}
            />
            <span>Breverages</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Popular;
