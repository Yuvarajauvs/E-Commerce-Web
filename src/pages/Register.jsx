import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Register</h1>
        <hr className={styles.hr} />
        <div className={styles.row}>
          <div className={styles.formWrapper}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="Name" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  className={styles.input}
                  id="Name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="Email" className={styles.label}>
                  Email address
                </label>
                <input
                  type="email"
                  className={styles.input}
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="Password" className={styles.label}>
                  Password
                </label>
                <input
                  type="password"
                  className={styles.input}
                  id="Password"
                  placeholder="Password"
                />
              </div>
              <div className={styles.formGroup}>
                <p>
                  Already has an account?{" "}
                  <Link to="/login" className={styles.link}>
                    Login
                  </Link>
                </p>
              </div>
              <div className={styles.textCenter}>
                <button className={styles.btn} type="submit" disabled>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
