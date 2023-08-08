import Breadcrumbs from "./Breadcrumbs";
import Breadcrumbs2 from "./Breadcrumbs2";

import styles from "./layout.module.css";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className={styles.head}>
        <Breadcrumbs />
        <div className={styles.breadcrumb}>
          <Breadcrumbs2 />
        </div>
      </div>
      {children}
    </main>
  );
}
