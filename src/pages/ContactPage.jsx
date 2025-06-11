import React from "react";
import { Footer, Navbar } from "../components";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <>
      <div className={`${styles.container} ${styles.my3} ${styles.py3}`}>
        <h1 className={styles.textCenter}>Contact Us</h1>
        <hr />
        <div className={styles.row}>
          <div
            className={`${styles.colMd4} ${styles.colLg4} ${styles.colSm8} ${styles.mxAuto}`}
          >
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="Name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  className={styles.formControl}
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="Email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  className={styles.formControl}
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="Message" className={styles.label}>
                  Message
                </label>
                <textarea
                  rows={5}
                  className={styles.formControl}
                  id="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className={styles.buttonWrapper}>
                <button className={styles.btnDark} type="submit" disabled>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
