import { FC } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../(Auth)/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import styles from "./signout.module.css";
import SignoutBtn from "./Signout.btn";

const Signout: FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className={styles.signout}>
      <div className={styles.container}>
        <SignoutBtn />
      </div>
    </div>
  );
};

export default Signout;
