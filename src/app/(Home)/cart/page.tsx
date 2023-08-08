import { FC } from "react";
import Link from "next/link";
import { getCart } from "@/lib/db/Cart";
import Image from "next/image";
import SelectQty from "./SelectQty";
import Remove from "./Remove";
import { Metadata } from "next";

import styles from "./cart.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "Review and Customize Your Order - Explore your selected pizza items in your cart. Customize toppings, sizes, and quantities before placing your delicious pizza order with us.",
};

const CartPage: FC = async () => {
  const cart = await getCart();

  return (
    <div className={styles.cart}>
      {cart?.CartItems.length === 0 ||
      cart?.CartItems.length === undefined ||
      cart?.CartItems.length === null ? (
        <span className={styles.empty}>
          <span>Wow your cart is so empty</span>
          <Link href="/">Shop Now</Link>
        </span>
      ) : (
        <div className={styles.container}>
          <ul className={styles.categories}>
            <li className={styles.info}>Product</li>
            <li className={styles.info}>Price</li>
            <li className={styles.info}>Quantity</li>
            <li className={styles.info}>Subtotal</li>
          </ul>
          <section>
            {cart?.CartItems.map((items) => {
              return (
                <ul key={items.ItemId} className={styles.items}>
                  <li className={styles.li_1}>
                    <Link href="#">
                      <Image
                        src={items.Item.image}
                        alt={items.Item.name}
                        height={160}
                        width={160}
                        priority
                      />
                    </Link>
                    <span>{items.Item.name}</span>
                  </li>
                  <li className={styles.li_2}>$ {items.Item.price}</li>
                  <li className={styles.li_3}>
                    <SelectQty id={items.ItemId} qty={items.quantity} />
                    <Remove id={items.ItemId} qty={items.quantity} />
                  </li>
                  <li className={styles.li_4}>
                    $ {items.Item.price * items.quantity}
                  </li>
                </ul>
              );
            })}
          </section>
        </div>
      )}
    </div>
  );
};

export default CartPage;
