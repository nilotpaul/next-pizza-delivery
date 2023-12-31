import { FC } from "react";

import Image from "next/image";

import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";

import styles from "./styles/whyus.module.css";

const WhyUs: FC = async () => {
  return (
    <div className={styles.whyus}>
      <h1>Why Us?</h1>
      <div className={styles.whyus__container}>
        <div className={styles.left}>
          <Image
            src="https://res.cloudinary.com/dtxry2kma/image/upload/v1690642886/next-pizza-delivery-app/whyus2"
            alt="Why Us?"
            fill
            sizes="100vw"
          />
        </div>
        <div className={styles.right}>
          <ul>
            <li className={styles.points}>
              <span id={styles.ico}>
                <MdOutlineDeliveryDining size={24} style={{ scale: "1.2" }} />
              </span>
              <span className={styles.desc}>
                Our dedicated delivery team ensures your pizza arrives piping
                hot and right on time, so you can enjoy that perfect slice
                without any delay.
              </span>
            </li>
            <li className={styles.points}>
              <span id={styles.ico}>
                <i
                  className="ri-shield-check-fill"
                  style={{ fontSize: "24px" }}
                />
              </span>
              <span className={styles.desc}>
                We take pride in crafting every pizza with the freshest
                ingredients, authentic recipes, and a whole lot of love,
                delivering an unforgettable dining experience to your doorstep.
              </span>
            </li>
            <li className={styles.points}>
              <span id={styles.ico}>
                <FaThumbsUp size={23} />
              </span>
              <span className={styles.desc}>
                Your satisfaction is our priority. From customized orders to
                friendly support, we go the extra mile to ensure your pizza
                journey with us is nothing short of exceptional.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
