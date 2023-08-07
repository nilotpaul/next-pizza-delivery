import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

import { HiOutlineMenuAlt2, HiSun, HiMoon } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import styles from "../Navigation/styles/navbar.module.css";

type ChildProps = {
  closeRef: React.RefObject<HTMLSpanElement>;
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement>;
  pathname: string;
};

const Navbar: FC<ChildProps> = ({
  closeRef,
  openNav,
  setOpenNav,
  isDark,
  setIsDark,
  menuRef,
  pathname,
}) => {
  const { data } = useSession();

  return (
    <nav className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.brand}>
          <h1>
            <span className={styles.pizza}>Pizza</span>
            <span className={styles.rio}>Rio</span>
          </h1>
        </Link>
        <div
          ref={menuRef}
          className={
            openNav
              ? `${styles.nav__menu}`
              : `${styles.nav__menu} ${styles.hidden}`
          }
        >
          <ul className={styles.nav__list}>
            <li onClick={() => setOpenNav(false)} className={styles.nav__items}>
              <Link
                id={pathname === "/" ? `${styles.active_link}` : ""}
                href="/"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setOpenNav(false)} className={styles.nav__items}>
              <Link
                id={pathname === "/menu" ? `${styles.active_link}` : ""}
                href="/menu"
              >
                Menu
              </Link>
            </li>
            <li onClick={() => setOpenNav(false)} className={styles.nav__items}>
              <Link
                id={pathname === "/about" ? `${styles.active_link}` : ""}
                href="/about"
              >
                About Me
              </Link>
            </li>
            <li onClick={() => setOpenNav(false)} className={styles.nav__items}>
              <Link
                id={pathname === "/contact" ? `${styles.active_link}` : ""}
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li onClick={() => setOpenNav(false)} className={styles.btn_li}>
              <Link className={styles.btn} href="/">
                Order Now
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.nav__right}>
          <span
            className={styles.menu}
            onClick={() => setOpenNav(!openNav)}
            ref={closeRef}
          >
            {openNav ? (
              <IoMdClose size={24} id={styles.close} />
            ) : (
              <HiOutlineMenuAlt2 size={23} id={styles.menu} />
            )}
          </span>
          <Link href="/cart">
            <i
              className="ri-shopping-bag-2-line"
              style={
                pathname === "/cart"
                  ? { color: "var(--yellow-color)", fontSize: "26px" }
                  : { fontSize: "26px" }
              }
            />
          </Link>
          {data ? (
            <Link href="/api/auth/signout">
              <Image
                src={data?.user.image as string}
                alt={data?.user.name as string}
                height={32}
                width={32}
                priority
              />
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <i
                className="ri-login-circle-line"
                style={{ fontSize: "26px" }}
              />
            </Link>
          )}
          <span
            className={styles.mode}
            style={
              isDark
                ? { backgroundColor: "#868686", color: "#fcdf2b" }
                : { backgroundColor: "#313131", color: "#fff" }
            }
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <HiSun size={22} id={styles.sun} />
            ) : (
              <HiMoon size={22} id={styles.moon} />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
