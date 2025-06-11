import React from "react";
import { Footer, Navbar } from "../components";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>About Us</h1>
        <hr className={styles.divider} />
        <p className={styles.text}>
          We offer affordable, high-quality products that combine style and
          value. Our mission is to provide you with the best deals on reliable
          products across fashion, electronics, and lifestyle categories. Shop
          confidently knowing you’re getting great quality without breaking the
          bank.
        </p>

        <h2 className={styles.subheading}>Our Products</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Men's Clothing"
            />
            <h5 className={styles.cardTitle}>Men's Clothing</h5>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Women's Clothing"
            />
            <h5 className={styles.cardTitle}>Women's Clothing</h5>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Jewelry"
            />
            <h5 className={styles.cardTitle}>Jewelery</h5>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Electronics"
            />
            <h5 className={styles.cardTitle}>Electronics</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
