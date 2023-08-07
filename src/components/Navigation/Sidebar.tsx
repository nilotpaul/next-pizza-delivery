import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";

import { IoChevronBackOutline } from "react-icons/io5";

import styles from "../Navigation/styles/sidebar.module.css";
import { Cart } from "@/Types/types";

type SidebarProps = {
  pathname: string;
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  session: Session | null;
  cart: Cart | null;
};

const Sidebar: FC<SidebarProps> = ({
  pathname,
  openSideBar,
  setOpenSideBar,
  session,
  cart,
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
            {/* if session isn't there(not done) */}
            {!session ? (
              <Link className={styles.sidebar__link} href="/api/auth/signin">
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
            ) : (
              <Image
                src={session?.user?.image as string}
                alt={session?.user?.name as string}
                height={40}
                width={40}
              />
            )}
          </li>
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
            <Link className={styles.sidebar__link} href="/cart">
              <i
                className="ri-shopping-cart-2-line"
                style={
                  pathname === "/login"
                    ? { color: "#c53d34", fontSize: "26px" }
                    : { fontSize: "26px" }
                }
              />
              <span>{cart?.qty}</span>
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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
