import styles from "./layout.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className={styles.head}>
        <h1>About us</h1>
        <div className={styles.breadcrumb}>
          <span>Home</span>
          <i className="ri-arrow-right-double-line" />
          <span>About Me</span>
        </div>
      </div>
      {children}
    </main>
  );
}
