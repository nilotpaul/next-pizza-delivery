import { FC } from "react";

import { prisma } from "@/lib/db/PrismaClient";
import SubmitButton from "./SubmitButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(Auth)/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import styles from "./dashboard.module.css";

async function addMenuItems(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const price = Number(formData.get("price") || 0);
  const image = formData.get("name")?.toString();

  if (!name || !price || !image) {
    throw Error("input fields shouldn't be empty");
  }

  try {
    await prisma.menuItems.create({
      data: { name, price, image },
    });
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong while adding the data");
  }
}

const Dashboard: FC = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user.email !== "nilotpaul.nandi007@gmail.com") {
    redirect("/");
  }

  return (
    <div className={styles.dashboard}>
      <form action={addMenuItems} className={styles.form}>
        <input
          required
          name="name"
          type="text"
          placeholder="Classic Cheese Pizza..."
          id={styles.name}
        />
        <input
          required
          name="price"
          type="text"
          placeholder="Price..."
          id={styles.price}
        />
        <input
          required
          name="image"
          type="url"
          placeholder="Image Link..."
          id={styles.img}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default Dashboard;
