import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

// context
import { cartContext } from "../context/CartContextProvider";

import { getData } from "../services/api";

// styles
import styles from "./ShopPage.module.css";

// icons
import {FaStar} from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const {state, dispatch} = useContext(cartContext)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
      return
    };

    fetchData();
  }, []);

  return (
    <div style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'flexWrap': 'wrap'}}>
      {products.map((product) => (
        <div className={styles['arrive-products']} key={product.id}>
          <div className={styles.product}>
            <div className={styles.pro__image}>
              <img src={product.image} alt="" />
            </div>
            <div className={styles.pro__text}>
              <span className={styles.pro__brand}>adidas</span>
              <span className={styles.pro__name}>
                {product.title}
              </span>

              <div className={styles.pro__desc}>
                <div className={styles["pro__footer-left"]}>
                  <div className={styles.pro__star}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className={styles.pro__count}>{product.price}</span>
                </div>

                <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})} className={styles["pro__cart"]}>
                  <BsCart3 />
                </button>
                <button onClick={() => dispatch({type: "INCREASE", payload: product})} className={styles["pro__cart"]}>
                  {/* + */}
                  +
                </button>
                <button onClick={() => dispatch({type: "DECREASE", payload: product})} className={styles["pro__cart"]}>
                  {/* - */}
                  -
                </button>
                <button onClick={() => dispatch({type: "REMOVE__ITEM", payload: product})} className={styles["pro__cart"]}>
                  {/* delete */}
                  de
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
