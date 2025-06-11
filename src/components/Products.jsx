// Products.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import styles from "./Products.module.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (isMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => (
    <div className={styles.skeletonWrapper}>
      {[...Array(6)].map((_, index) => (
        <div className={styles.card} key={index}>
          <Skeleton height={350} />
        </div>
      ))}
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className={styles.filterButtons}>
        {[
          "All",
          "men's clothing",
          "women's clothing",
          "jewelery",
          "electronics",
        ].map((cat) => (
          <button
            key={cat}
            className={styles.filterBtn}
            onClick={() =>
              cat === "All" ? setFilter(data) : filterProduct(cat)
            }
          >
            {cat === "All" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.productGrid}>
        {filter.map((product) => (
          <div className={styles.card} key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImg}
            />
            <div className={styles.cardBody}>
              <h5 className={styles.title}>
                {product.title.substring(0, 20)}...
              </h5>
              <p className={styles.description}>
                {product.description.substring(0, 80)}...
              </p>
              <div className={styles.price}>${product.price}</div>
              <div className={styles.actions}>
                <Link to={`/product/${product.id}`} className={styles.buyBtn}>
                  Buy Now
                </Link>
                <button
                  className={styles.cartBtn}
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Products</h2>
      <hr className={styles.divider} />
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
