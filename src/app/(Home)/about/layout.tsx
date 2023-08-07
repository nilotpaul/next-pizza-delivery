import Link from "next/link";
import styles from "./layout.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className={styles.head}>
        <h1>About Me</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <i className="ri-arrow-right-double-line" />
          <Link href="/about">About</Link>
        </div>
      </div>
      {children}
    </main>
  );
}
