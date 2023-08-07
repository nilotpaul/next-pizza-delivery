"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Breadcrumbs2: FC = () => {
  const path = usePathname();
  const exactPath = path.toLowerCase().split("/").splice(1).slice(0, 2);
  const breadcrumb = exactPath.map((items, id) => {
    return (
      <div key={id}>
        <i className="ri-arrow-right-double-line" />
        <Link href={`/${items === "menu" ? `${items}` : `menu/${items}`}`}>
          {items}
        </Link>
      </div>
    );
  });

  return (
    <>
      <Link href="/">Home</Link>
      {breadcrumb}
    </>
  );
};

export default Breadcrumbs2;
