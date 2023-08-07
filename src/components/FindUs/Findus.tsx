import { FC } from "react";

import Image from "next/image";

import styles from "./styles/findus.module.css";

const Findus: FC = () => {
  return (
    <div className={styles.findus}>
      <h1>Find Us</h1>
      <div className={styles.down}>
        <div className={styles.address}>
          <h3>Address:</h3>
          <p>123 Pizza Street, Cityville, State, 54321</p>
          <h3>Working Hours:</h3>
          <p>Monday - Saturday: 11:00 AM to 10:00 PM</p>
          <p>Sunday: 12:00 PM to 9:00 PM</p>
          <h3>Contacts:</h3>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@pizzario.com</p>
        </div>
        <div className={styles.map}>
          <Image
            src="https://res.cloudinary.com/dtxry2kma/image/upload/v1690642886/next-pizza-delivery-app/map_izk7md"
            alt="Find Us Map"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Findus;
