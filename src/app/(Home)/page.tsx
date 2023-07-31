import Banner from "@/components/Banner/Banner";
import Popular from "@/components/Popular/Popular";
import Food from "@/components/Popular/Food";
import WhyUs from "@/components/WhyUs/WhyUs";
import FollowUs from "@/components/FollowUs/Followus";

import styles from "./home.module.css";

export default function Home() {
  return (
    <main className="main">
      <div className={styles.home}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <div className={styles.categories}>
          <Popular />
        </div>
        <div className={styles.popular}>
          <Food />
        </div>
        <div className={styles.whyus}>
          <WhyUs />
        </div>
        <div className={styles.followus}>
          <FollowUs />
        </div>
      </div>
    </main>
  );
}
