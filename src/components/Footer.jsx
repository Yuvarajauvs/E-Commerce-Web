// Footer.js
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/Yuvarajauvs"
              className={styles.footerLink}
              target="_blank"
              rel="noreferrer"
            >
              Fun
            </a>
          </p>
          <a
            className={styles.githubIcon}
            href="https://github.com/Yuvarajauvs"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
