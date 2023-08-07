import { FC } from "react";

import styles from "./about.module.css";
import Link from "next/link";

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <p>
          Hi! I&apos;m Nilotpaul Nandi, an enthusiastic developer and tech
          lover. Welcome to my web development project, where I showcase my
          skills and passion for coding in a creative way.
        </p>
        <h2>My Pizza-Themed Web Project:</h2>
        <p className={styles.h_2}>
          This project is purely for fun and to explore the capabilities of
          modern web development tools.
        </p>
        <ul>
          <li>
            <span>Next.js:</span>Frontend
          </li>
          <li>
            <span>Prisma:</span>For database interactions
          </li>
          <li>
            <span>NextAuth.js:</span>For Authentication
          </li>
        </ul>
        <h2>Github Repository:</h2>
        <p className={styles.repo}>
          You can explore the repository at
          <Link href="github.com/nilotpaul">github.com/nilotpaul.</Link>
        </p>
      </div>
    </div>
  );
};

export default About;
