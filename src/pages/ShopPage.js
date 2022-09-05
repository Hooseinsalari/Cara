import React, { useEffect, useState } from "react";

// service
import { getAllProducts } from "../services/getAllProducts";

// components
import Product from "../components/shared/Product";
import Loading from "../components/shared/Loading";

// styles
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.shop__header}>
        <h1 className={styles.shop__title}>#StayHome</h1>
        <p className={styles.shop__subtitle}>
          save more with coupons and up to 70% off!
        </p>
      </div>

      <div className={styles.shop__product}>
        {products.length ? (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ShopPage;
