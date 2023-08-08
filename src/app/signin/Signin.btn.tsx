"use client";

import Loader from "@/LoadingSpinner/Loader";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FC, useTransition } from "react";
import { FcGoogle } from "react-icons/fc";

const Signinbtn: FC = () => {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const URL = searchParams.get("callbackUrl");
  const callbackUrl = URL ? URL : "/";

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <button
        onClick={() => {
          startTransition(() => {
            signIn("google", { callbackUrl });
          });
        }}
      >
        Signin with google
        <FcGoogle fontSize={20} />
      </button>
      {isPending ? <Loader /> : null}
    </div>
  );
};

export default Signinbtn;
