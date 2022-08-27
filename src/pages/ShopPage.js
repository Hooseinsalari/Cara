import axios from "axios";
import React, { useEffect, useState } from "react";

// components
import Product from "../components/shared/Product";

// styles
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      return;
    };

    fetchData();
  }, []);

  return (
    <div className={styles.conteiner}>
      {products.map((product) => (
          <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopPage;
