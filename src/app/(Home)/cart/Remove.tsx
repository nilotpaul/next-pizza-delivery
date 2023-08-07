"use client";

import { FC, useTransition } from "react";
import { removeItem } from "./actions";
import Loader from "@/LoadingSpinner/Loader";

type RemoveProps = {
  id: string;
  qty: number;
};

const Remove: FC<RemoveProps> = ({ id, qty }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <i
        onClick={() => {
          startTransition(async () => {
            await removeItem(qty, id);
          });
        }}
        style={isPending ? { visibility: "hidden" } : undefined}
        className="ri-delete-bin-6-line"
      />
      <span
        style={
          isPending
            ? {
                position: "relative",
                top: "-8px",
                right: "45px",
              }
            : {
                position: "relative",
                top: "-8px",
                right: "45px",
                visibility: "hidden",
              }
        }
      >
        <Loader />
      </span>
    </>
  );
};

export default Remove;
