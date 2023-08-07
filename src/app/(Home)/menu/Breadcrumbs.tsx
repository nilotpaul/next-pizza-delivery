"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { FC } from "react";

const Breadcrumbs: FC = () => {
  const pathname = useSelectedLayoutSegment();

  return (
    <>
      {pathname === "pizza" ? (
        <h1>{pathname?.toUpperCase()}</h1>
      ) : (
        <h1>Menu</h1>
      )}
    </>
  );
};

export default Breadcrumbs;
