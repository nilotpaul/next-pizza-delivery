"use client";

import { FC, useTransition } from "react";
import { add } from "@/lib/db/actions";
import { useRouter } from "next/navigation";

import Loader from "@/LoadingSpinner/Loader";

interface BuynowProps {
  id: string;
}

const Buynow: FC<BuynowProps> = ({ id }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        onClick={() => {
          startTransition(async () => {
            await add(id);
          });

          router.push("/cart");
        }}
      >
        Buy Now
        {isPending ? <Loader /> : null}
      </button>
    </>
  );
};

export default Buynow;
