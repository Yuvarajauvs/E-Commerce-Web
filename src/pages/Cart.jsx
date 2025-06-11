import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => (
    <div className={styles.container}>
      <div className={styles.row}>
        <div
          className={`${styles.colMd12} ${styles.py3} ${styles.bgLight} ${styles.textCenter}`}
        >
          <h4 className={`${styles.p3}`}>Your Cart is Empty</h4>
          <Link to="/" className={`${styles.btn} ${styles.mx4}`}>
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className={styles.container}>
        <div
          className={styles.row}
          style={{ justifyContent: "center", margin: "1rem 0" }}
        >
          <div className={styles.colMd8}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h5>Item List</h5>
              </div>
              <div className={styles.cardBody}>
                {state.map((item) => (
                  <div key={item.id}>
                    <div className={`${styles.row} ${styles.alignCenter}`}>
                      <div className={`${styles.colMd8}`}>
                        <div className={styles.imgRounded}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className={styles.imgSmall}
                          />
                        </div>
                      </div>

                      <div className={`${styles.colMd8}`} style={{ flex: 5 }}>
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                      </div>

                      <div className={`${styles.colMd8}`} style={{ flex: 3 }}>
                        <div
                          className={`${styles.flex} ${styles.mb4}`}
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className={styles.btn}
                            onClick={() => removeItem(item)}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <p style={{ margin: "0 1.5rem" }}>{item.qty}</p>
                          <button
                            className={styles.btn}
                            onClick={() => addItem(item)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p
                          className={`${styles.textStart} ${styles.textMdCenter}`}
                        >
                          <strong>
                            <span className={styles.textMuted}>{item.qty}</span>{" "}
                            x ${item.price}
                          </strong>
                        </p>
                      </div>
                    </div>
                    <hr className={styles.my4} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.colMd4}>
            <div className={styles.card}>
              <div className={`${styles.cardHeader} ${styles.bgLight}`}>
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
                    Shipping <span>${shipping}</span>
                  </li>
                  <li
                    className={`${styles.listGroupItem} ${styles.listGroupItemLast}`}
                  >
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>${Math.round(subtotal + shipping)}</strong>
                    </span>
                  </li>
                </ul>

                <Link
                  to="/checkout"
                  className={`${styles.btn} ${styles.btnDark} ${styles.btnBlock}`}
                >
                  Go to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <div className={`${styles.container} ${styles.my3} ${styles.py3}`}>
        <h1 className={styles.textCenter}>Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Cart;
