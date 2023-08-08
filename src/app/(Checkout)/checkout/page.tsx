import { authOptions } from "@/app/(Auth)/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react";

const Checkout: FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return <div>Checkout</div>;
};

export default Checkout;
