"use client";

import Loader from "@/LoadingSpinner/Loader";
import { FC } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton: FC = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending ? true : false}
      style={
        pending
          ? { backgroundColor: "#ccc", position: "relative" }
          : { position: "relative" }
      }
      type="submit"
    >
      {!pending ? (
        <span>Submit</span>
      ) : (
        <>
          Submit
          <Loader />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
