import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => (
    <div className={styles.container}>
      <div className={styles.row}>
        <div
          className={`${styles.colMd12} ${styles.py3} ${styles.bgLight} ${styles.textCenter}`}
        >
          <h4 className={`${styles.p3} display-5`}>No item in Cart</h4>
          <Link
            to="/"
            className={`${styles.btnOutlineDark} ${styles.mx4} ${styles.btn}`}
          >
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <div className={styles.container}>
        <div
          className={styles.row}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div
            className={`${styles.colMd5} ${styles.colLg4} ${styles.orderMdLast}`}
          >
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h5>Order Summary</h5>
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.listGroup}>
                  <li
                    className={`${styles.listGroupItem} ${styles.borderNone} ${styles.px0} ${styles.pb0}`}
                  >
                    Products ({totalItems})<span>${Math.round(subtotal)}</span>
                  </li>
                  <li className={styles.listGroupItem}>
                    Shipping<span>${shipping}</span>
                  </li>
                  <li
                    className={`${styles.listGroupItem} ${styles.mb3} ${styles.borderNone} ${styles.px0}`}
                  >
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>${Math.round(subtotal + shipping)}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${styles.colMd7} ${styles.colLg8}`}>
            <div className={styles.card}>
              <div
                className={styles.cardHeader}
                style={{ backgroundColor: "white" }}
              >
                <h4>Billing address</h4>
              </div>
              <div className={styles.cardBody}>
                <form className={styles.needsValidation} noValidate>
                  <div className={styles.g3}>
                    <div className={`${styles.colSm6} ${styles.my1}`}>
                      <label htmlFor="firstName" className={styles.formLabel}>
                        First name
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="firstName"
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className={`${styles.colSm6} ${styles.my1}`}>
                      <label htmlFor="lastName" className={styles.formLabel}>
                        Last name
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="lastName"
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div className={`${styles.colMd12} ${styles.my1}`}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email
                      </label>
                      <input
                        type="email"
                        className={styles.formControl}
                        id="email"
                        placeholder="you@example.com"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className={`${styles.colMd12} ${styles.my1}`}>
                      <label htmlFor="address" className={styles.formLabel}>
                        Address
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className={`${styles.colMd12}`}>
                      <label htmlFor="address2" className={styles.formLabel}>
                        Address 2{" "}
                        <span className={styles.textMuted}>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div className={`${styles.colMd5} ${styles.my1}`}>
                      <label htmlFor="country" className={styles.formLabel}>
                        Country
                      </label>
                      <select
                        className={styles.formControl}
                        id="country"
                        required
                      >
                        <option value="">Choose...</option>
                        <option>India</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className={`${styles.colMd4} ${styles.my1}`}>
                      <label htmlFor="state" className={styles.formLabel}>
                        State
                      </label>
                      <select
                        className={styles.formControl}
                        id="state"
                        required
                      >
                        <option value="">Choose...</option>
                        <option>Punjab</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className={`${styles.colMd3} ${styles.my1}`}>
                      <label htmlFor="zip" className={styles.formLabel}>
                        Zip
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="zip"
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>

                  <hr className={styles.my4} />

                  <h4 className={styles.my3}>Payment</h4>

                  <div className={styles.gy3}>
                    <div className={styles.colMd6}>
                      <label htmlFor="cc-name" className={styles.formLabel}>
                        Name on card
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="cc-name"
                        required
                      />
                      <small className={styles.textMuted}>
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>

                    <div className={styles.colMd6}>
                      <label htmlFor="cc-number" className={styles.formLabel}>
                        Credit card number
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="cc-number"
                        required
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>

                    <div className={styles.colMd3}>
                      <label
                        htmlFor="cc-expiration"
                        className={styles.formLabel}
                      >
                        Expiration
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="cc-expiration"
                        required
                      />
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>

                    <div className={styles.colMd3}>
                      <label htmlFor="cc-cvv" className={styles.formLabel}>
                        CVV
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="cc-cvv"
                        required
                      />
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>

                  <hr className={styles.my4} />

                  <button
                    className={`${styles.w100} ${styles.btnPrimary}`}
                    type="submit"
                    disabled
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`${styles.container} ${styles.my3} ${styles.py3}`}>
        <h1 className={styles.textCenter}>Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Checkout;
