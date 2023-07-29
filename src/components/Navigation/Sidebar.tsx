import { FC } from "react";
import Link from "next/link";

import { MdLocationOn } from "react-icons/md";
import { BsBagCheckFill, BsFillCartFill } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";

import styles from "../Navigation/styles/sidebar.module.css";

type SidebarProps = {
  pathname: string;
};

const Sidebar: FC<SidebarProps> = ({ pathname }) => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.sidebar__inside} container`}>
        <ul className={styles.sidebar__menu}>
          <li className={styles.sidebar__items}>
            <Link className={styles.sidebar__link} href="#">
              <MdLocationOn
                size={22}
                color={pathname === "/location" ? "#c53d34" : ""}
              />
              <span>Location</span>
            </Link>
          </li>
          <li className={styles.sidebar__items}>
            <Link className={styles.sidebar__link} href="#">
              <BsFillCartFill
                size={21.5}
                color={pathname === "/cart" ? "#c53d34" : ""}
              />
              <span>Cart</span>
            </Link>
          </li>
          <li className={styles.sidebar__items}>
            <Link className={styles.sidebar__link} href="#">
              <BsBagCheckFill
                size={21.5}
                color={pathname === "/orders" ? "#c53d34" : ""}
              />
              <span>Orders</span>
            </Link>
          </li>
          <li className={styles.sidebar__items}>
            <Link className={styles.sidebar__link} href="#">
              <RiLoginCircleFill
                size={22}
                color={pathname === "/login" ? "#c53d34" : ""}
              />
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
