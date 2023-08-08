import { FC } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../(Auth)/api/auth/[...nextauth]/route";
import Signinbtn from "./Signin.btn";
import { redirect } from "next/navigation";

import styles from "./signin.module.css";

const Signin: FC = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className={styles.signin}>
      <div className={styles.container}>
        <Signinbtn />
      </div>
    </div>
  );
};

export default Signin;
