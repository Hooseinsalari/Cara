import React, { useState, useEffect } from "react";

// service
import { getAllProducts } from "../../services/getAllProducts";

// styles
import styles from "./HomeProducts.module.css";

// components
import Product from "../shared/Product";
import Loading from "../shared/Loading";

const HomeProducts = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllProducts();
      setNewProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.title}>
        <h1 className={styles["title__head"]}>New Arrivals</h1>
        <p className={styles["title__desc"]}>
          Summer Collection New Modern Design
        </p>
      </div>

      <div className={styles["arrive-products"]}>
        {newProducts.length ? (
          newProducts
            .slice(1, 5)
            .map((product) => <Product key={product._id} product={product} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
