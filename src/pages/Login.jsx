import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titleCenter}>Login</h1>
        <hr />
        <div className={`${styles.row} ${styles.my3} h-100`}>
          <div className={`${styles.colAuto} ${styles.formWrapper}`}>
            <form>
              <div className={`${styles.formGroup} ${styles.my3}`}>
                <label htmlFor="emailInput" className={styles.label}>
                  Email address
                </label>
                <input
                  type="email"
                  className={styles.inputField}
                  id="emailInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className={`${styles.formGroup} ${styles.my3}`}>
                <label htmlFor="passwordInput" className={styles.label}>
                  Password
                </label>
                <input
                  type="password"
                  className={styles.inputField}
                  id="passwordInput"
                  placeholder="Password"
                />
              </div>
              <div className={styles.my3}>
                <p>
                  New Here?{" "}
                  <Link to="/register" className={styles.link}>
                    Register
                  </Link>
                </p>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  className={`${styles.btn} ${styles.btnDisabled}`}
                  type="submit"
                  disabled
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
