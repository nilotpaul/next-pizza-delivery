import { FC } from "react";
import Image from "next/image";
import loader from "../../../loader";
import Link from "next/link";

import { Pacifico } from "next/font/google";

import styles from "./styles/popular.module.css";

const pacifico = Pacifico({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const Popular: FC = () => {
  return (
    <div className={styles.popular}>
      <span className={pacifico.className} id={styles.specials}>
        What are you craving for?
      </span>
      <div className={styles.categories}>
        <ul className={styles.category}>
          <Link href="/menu/pizza">
            <li className={styles.pizza}>
              <Image
                loader={loader}
                src="/next-pizza-delivery-app/pizza-cat.png"
                alt="Pizza"
                height={90}
                width={90}
              />
              <span>Pizza</span>
            </li>
          </Link>
          <Link href="#">
            <li className={styles.combo}>
              <Image
                loader={loader}
                src="/next-pizza-delivery-app/combo-cat.png"
                alt="Combo"
                height={100}
                width={100}
              />
              <span>Combo</span>
            </li>
          </Link>
          <Link href="#">
            <li className={styles.snacks}>
              <Image
                loader={loader}
                src="/next-pizza-delivery-app/snacks-cat.png"
                alt="Snacks"
                height={100}
                width={100}
              />
              <span>Snacks</span>
            </li>
          </Link>
          <Link href="#">
            <li className={styles.desserts}>
              <Image
                loader={loader}
                src="/next-pizza-delivery-app/dessert-cat.png"
                alt="Desserts"
                height={100}
                width={100}
              />
              <span>Desserts</span>
            </li>
          </Link>
          <Link href="#">
            <li className={styles.breverages}>
              <Image
                loader={loader}
                src="/next-pizza-delivery-app/breverage-cat.png"
                alt="Breverages"
                height={80}
                width={80}
              />
              <span>Breverages</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Popular;
