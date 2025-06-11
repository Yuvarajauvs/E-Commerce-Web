// Home.js
import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heading}>Big Deals This Season!</h1>
        <p className={styles.subtext}>
          Up to 50% off on selected products. Shop now and save big!
        </p>
        <button className={styles.ctaButton}>Explore Now</button>
      </div>
    </div>
  );
};

export default Home;
