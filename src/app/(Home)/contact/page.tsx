import { FC } from "react";
import { Metadata } from "next";

import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "To lazy to write anything",
};

const Contact: FC = () => {
  return <div className={styles.contact}>To lazy to write anything</div>;
};

export default Contact;
