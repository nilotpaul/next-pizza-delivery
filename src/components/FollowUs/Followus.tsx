import { FC } from "react";

import styles from "./styles/followus.module.css";
import Image from "next/image";

const FollowUs: FC = () => {
  return (
    <div className={styles.followus}>
      <h1>Follow us on Instagram!</h1>
      <h3>
        <span>@pizza</span>.<span>rio</span>
      </h3>
      <div className={styles.carousel}>
        <ul className={styles.carousel__track}>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c4_wrdw3k"
              alt="story 1"
              fill
            />
          </li>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c2_jhlbvz"
              alt="Story 2"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
          </li>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c3_y1erpl"
              alt="Story 3"
              fill
            />
          </li>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c5_hacrjq"
              alt="Story 4"
              fill
            />
          </li>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c1_fcqqix"
              alt="Story 5"
              fill
            />
          </li>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c4_wrdw3k"
              alt="story 1"
              fill
            />
          </li>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c2_jhlbvz"
              alt="Story 2"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
          </li>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c3_y1erpl"
              alt="Story 3"
              fill
            />
          </li>

          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c5_hacrjq"
              alt="Story 4"
              fill
            />
          </li>
          <li className={styles.carousel__items}>
            <Image
              src="/next-pizza-delivery-app/c1_fcqqix"
              alt="Story 5"
              fill
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FollowUs;
