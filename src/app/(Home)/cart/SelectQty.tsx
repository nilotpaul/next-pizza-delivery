"use client";

import { FC, useTransition } from "react";
import { setQty } from "./actions";
import Loader from "@/LoadingSpinner/Loader";

import styles from "./cart.module.css";

type SelectQtyProps = {
  id: string;
  qty: number;
};

const SelectQty: FC<SelectQtyProps> = ({ id, qty }) => {
  const [isPending, startTransition] = useTransition();
  const qtyOptions: JSX.Element[] = [];
  for (let i = 0; i <= 6; i++) {
    qtyOptions.push(
      <option value={i} key={i} id={styles.options}>
        {i === 0 ? "0 (delete)" : i}
      </option>
    );
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <select
        onChange={(e) => {
          const newQty = parseInt(e.currentTarget.value);

          startTransition(async () => {
            await setQty(id, newQty);
          });
        }}
        defaultValue={qty}
        id={styles.qty}
      >
        {qtyOptions}
      </select>
      <span
        style={
          isPending
            ? {
                position: "relative",
                top: "-8px",
                right: "-30px",
              }
            : {
                position: "relative",
                top: "-8px",
                right: "-30px",
                visibility: "hidden",
              }
        }
      >
        <Loader />
      </span>
    </div>
  );
};

export default SelectQty;
