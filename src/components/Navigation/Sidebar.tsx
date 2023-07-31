import { FC } from "react";
import Link from "next/link";

import { IoChevronBackOutline } from "react-icons/io5";

import styles from "../Navigation/styles/sidebar.module.css";

type SidebarProps = {
  pathname: string;
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: FC<SidebarProps> = ({
  pathname,
  openSideBar,
  setOpenSideBar,
}) => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.sidebar__inside} container`}>
        <IoChevronBackOutline
          onClick={() => setOpenSideBar(!openSideBar)}
          size={30}
          id={styles.back}
        />
        <ul
          className={
            openSideBar
              ? `${styles.sidebar__menu}`
              : `${styles.sidebar__menu} ${styles.hidden}`
          }
        >
          <li className={styles.sidebar__items}>
            <Link className={styles.sidebar__link} href="#">
              <i
                className="ri-map-pin-line"
                style={
                  pathname === "/login"
                    ? { color: "#c53d34", fontSize: "26px" }
                    : { fontSize: "26px" }
                }
              />
              <span>Location</span>
            </Link>
          </li>
          <li className={styles.sidebar__items}>
            <Link className={styles.sidebar__link} href="#">
              <i
                className="ri-shopping-cart-2-line"
                style={
                  pathname === "/login"
                    ? { color: "#c53d34", fontSize: "26px" }
                    : { fontSize: "26px" }
                }
              />
              <span>Cart</span>
            </Link>
          </li>
          <li className={styles.sidebar__items}>
            <Link className={styles.sidebar__link} href="#">
              <i
                className="ri-shopping-bag-2-line"
                style={
                  pathname === "/login"
                    ? { color: "#c53d34", fontSize: "26px" }
                    : { fontSize: "26px" }
                }
              />
              <span>Orders</span>
            </Link>
          </li>
          <li className={styles.sidebar__items}>
            <Link className={styles.sidebar__link} href="#">
              <i
                className="ri-login-circle-line"
                style={
                  pathname === "/login"
                    ? { color: "#c53d34", fontSize: "26px" }
                    : { fontSize: "26px" }
                }
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
