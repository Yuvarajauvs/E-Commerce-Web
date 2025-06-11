import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.colLeft} ${styles.py3}`}>
          <Skeleton height={400} width={400} />
        </div>
        <div className={`${styles.colRight} ${styles.py5}`}>
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.colLeft}>
          <img
            className={styles.imgFluid}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className={styles.colRight}>
          <h4 className={styles.categoryText}>{product.category}</h4>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.rating}>
            {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className={styles.price}>${product.price}</h3>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.btnGroup}>
            <button
              className={styles.btnOutline}
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className={styles.btnDark}>
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className={styles.similarProducts}>
      <div className={styles.dFlex}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ margin: "0 1rem" }}>
            <Skeleton height={400} width={250} />
          </div>
        ))}
      </div>
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className={styles.similarProducts}>
      <div className={styles.dFlex}>
        {similarProducts.map((item) => (
          <div key={item.id} className={styles.cardContainer}>
            <img
              className={styles.cardImage}
              src={item.image}
              alt={item.title}
              loading="lazy"
            />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>
                {item.title.substring(0, 15)}...
              </h5>
            </div>
            <div className={styles.cardBtnGroup}>
              <Link to={`/product/${item.id}`} className={styles.btnDark}>
                Buy Now
              </Link>
              <button
                className={styles.btnDark}
                onClick={() => addProduct(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {loading ? <Loading /> : product && <ShowProduct />}
      <div className={styles.similarProducts}>
        <h2>You may also Like</h2>
        <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
          {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
        </Marquee>
      </div>
    </>
  );
};

export default Product;
