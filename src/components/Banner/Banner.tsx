import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./styles/banner.module.css";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const Banner: FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <span className={kaushan.className} id={styles.first}>
          Try Our New
        </span>
        <span id={styles.second}>
          Authentic <span id={styles.third}>Napoli Delight</span>
        </span>
        <p>
          Indulge in the true taste of Italy with our Authentic Napoli Delight.
          Each pizza is handcrafted with love, using the finest ingredients and
          traditional recipes.
        </p>
        <div className={styles.down}>
          <Link href="#">Go To Menu</Link>
          <span id={styles.price_1}>
            $ 17,99 <span id={styles.price_2}>$ 23,00</span>
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.img_container}>
          <Image
            className={styles.banner_img}
            src="/next-pizza-delivery-app/banner.png"
            alt="banner-img"
            width={500}
            height={500}
            priority
          />
          <Image
            className={styles.jalapeno}
            src="/next-pizza-delivery-app/jalapeno"
            alt="jalapeno"
            height={260}
            width={260}
            quality={100}
          />
          <Image
            className={styles.rasher}
            src="/next-pizza-delivery-app/grilled-chicken-rasher"
            alt="grillied-chicken-rasher"
            height={260}
            width={260}
            quality={100}
          />
          <Image
            className={styles.onion}
            src="/next-pizza-delivery-app/onion"
            alt="onion"
            height={260}
            width={260}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
