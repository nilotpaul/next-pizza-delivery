"use client";

import Loader from "@/LoadingSpinner/Loader";
import { signOut } from "next-auth/react";
import { FC, useTransition } from "react";

const SignoutBtn: FC = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <button
        onClick={() => {
          startTransition(() => {
            signOut({ callbackUrl: "/" });
          });
        }}
      >
        Signout?
      </button>
      {isPending ? <Loader /> : null}
    </div>
  );
};

export default SignoutBtn;
