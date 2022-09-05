import React, { useState, useEffect } from "react";

// service
import { getAllProducts } from "../services/getAllProducts";

// styles
import styles from "./HomeProducts.module.css";

// image
import proImage from "../img/products/f1.jpg";

// icons
import { FaStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Product from "./shared/Product";

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
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles["title__head"]}>New Arrivals</h1>
        <p className={styles["title__desc"]}>
          Summer Collection New Modern Design
        </p>
      </div>

      <div className={styles["arrive-products"]}>
        {newProducts.slice(1, 5).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
