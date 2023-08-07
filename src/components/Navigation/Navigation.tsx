"use client";

import { usePathname } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
import { Session } from "next-auth";
import { Cart } from "@/Types/types";

type NavigationProps = {
  session: Session | null;
  cart: Cart | null;
};

const Navigation: FC<NavigationProps> = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  // const [openSideBar, setopenSideBar] = useState<boolean>(false);
  const closeRef = useRef<HTMLSpanElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("mousedown", (e: MouseEvent) => {
      if (
        !closeRef.current?.contains(e.target as HTMLSpanElement) &&
        !menuRef.current?.contains(e.target as HTMLDivElement)
      ) {
        setOpenNav(false);
      }
    });
  }, [openNav, closeRef]);

  return (
    <>
      <Navbar
        closeRef={closeRef}
        openNav={openNav}
        setOpenNav={setOpenNav}
        isDark={isDark}
        setIsDark={setIsDark}
        menuRef={menuRef}
        pathname={pathname}
      />
      {/* <Sidebar
        session={session}
        pathname={pathname}
        openSideBar={openSideBar}
        setOpenSideBar={setopenSideBar}
        cart={cart}
      /> */}
    </>
  );
};

export default Navigation;
