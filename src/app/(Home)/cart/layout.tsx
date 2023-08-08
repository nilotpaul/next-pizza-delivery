import { getCart } from "@/lib/db/Cart";
import Link from "next/link";
import ClearAll from "./ClearAll";

import styles from "./layout.module.css";

export default async function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cart = await getCart();

  return (
    <main className={styles.main}>
      {children}

      <div
        className={
          cart?.CartItems.length === 0 ||
          cart?.CartItems.length === undefined ||
          cart?.CartItems.length === null
            ? styles.hidden
            : styles.sidebar
        }
      >
        <span>
          Subtotal <span>$ {cart?.subtotal?.toFixed(2)}</span>
        </span>
        <Link href="/checkout">Checkout ({cart?.qty})</Link>
        <ClearAll />
      </div>
    </main>
  );
}
