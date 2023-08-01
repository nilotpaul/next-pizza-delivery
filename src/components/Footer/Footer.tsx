import { FC } from "react";
import Link from "next/link";

import { BsClockHistory } from "react-icons/bs";

import styles from "./styles/footer.module.css";

const Footer: FC = () => {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.brand}>
          <span>Pizza</span>
          <span>Rio</span>
          <p>Delivering Happiness One Slice at a Time!</p>
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className={styles.working_hours}>
          <BsClockHistory size={45} id={styles.clock} />
          <div className={styles.timing}>
            <span>WORKING HOURS</span>
            <span>11:00 - 10:00</span>
          </div>
        </div>
        <div className={styles.social}>
          <i className="ri-facebook-circle-line" />
          <i className="ri-instagram-line" />
          <i className="ri-twitter-line" />
          <Link href="https://github.com/nilotpaul">
            <i className="ri-github-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
