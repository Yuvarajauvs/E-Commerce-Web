import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.centeredSection}>
          <h4 className={styles.title}>404: Page Not Found</h4>
          <Link to="/" className={styles.btn}>
            <i className={`fa fa-arrow-left ${styles.icon}`}></i> Go Back to
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
