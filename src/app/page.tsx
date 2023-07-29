import Banner from "@/components/Banner/Banner";
import styles from "./home.module.css";
import Popular from "@/components/Popular/Popular";

export default function Home() {
  return (
    <main className="main">
      <div className={styles.home}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <div className={styles.popular}>
          <Popular />
        </div>
      </div>
    </main>
  );
}
