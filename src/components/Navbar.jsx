// Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink className={styles.brand} to="/">
          React Ecommerce
        </NavLink>

        <button className={styles.toggler} onClick={toggleNavbar}>
          <span className={styles.togglerIcon}></span>
        </button>

        <div className={`${styles.navCollapse} ${isOpen ? styles.show : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/product">
                Products
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/about">
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className={styles.buttons}>
            <NavLink to="/login" className={styles.btn}>
              <i className="fa fa-sign-in-alt"></i> Login
            </NavLink>
            <NavLink to="/register" className={styles.btn}>
              <i className="fa fa-user-plus"></i> Register
            </NavLink>
            <NavLink to="/cart" className={styles.btn}>
              <i className="fa fa-cart-shopping"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
