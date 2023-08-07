"use client";

import { FC, useTransition } from "react";

import styles from "./cart.module.css";
import { clearAll } from "./actions";
import Loader from "@/LoadingSpinner/Loader";

const ClearAll: FC = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <span
        onClick={() => {
          startTransition(async () => {
            await clearAll();
          });
        }}
      >
        Clear Cart
        {!isPending ? (
          <i className="ri-delete-bin-5-fill" />
        ) : (
          <span className={styles.loader}>
            <Loader />
          </span>
        )}
      </span>
    </>
  );
};

export default ClearAll;
