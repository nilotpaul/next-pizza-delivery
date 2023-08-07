"use client";

import Loader from "@/LoadingSpinner/Loader";
import { add } from "@/lib/db/actions";
import { FC, useTransition } from "react";

type AddtocartProps = {
  id: string;
};

const Addtocart: FC<AddtocartProps> = ({ id }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        onClick={() => {
          startTransition(async () => {
            await add(id);
          });
        }}
      >
        Add to cart
        {isPending ? <Loader /> : null}
      </button>
    </>
  );
};

export default Addtocart;
