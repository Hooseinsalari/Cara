import React, { useContext, useState } from "react";

// context
import { cartContext } from "../../context/CartContextProvider";

// style
import styles from "./Product.module.css";

// icons
import { FaStar } from "react-icons/fa";
import { BsCart3, BsTrash } from "react-icons/bs";
import { isInCart } from "../../helper/function";

const Product = ({ product }) => {
  const { state, dispatch } = useContext(cartContext);

  const [flip, setFlip] = useState(false);

  return (
    <div className={styles["arrive-products"]}>
      <div className={styles.product}>
        <div className={styles.pro__image}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.pro__text}>
          <span className={styles.pro__brand}>adidas</span>
          <span className={styles.pro__name}>{product.title}</span>

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

            {!isInCart(state, product.id) ? (
              <button
                onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                }
                className={styles["pro__cart"]}
              >
                <BsCart3 
                    onClick={() => setFlip(true)}
                    onAnimationEnd={() => setFlip(false)}
                    className={flip ? [styles["cart-icon"],styles["flip"]].join(" ") : styles["cart-icon"]}
                />
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE__ITEM", payload: product })
                }
                className={styles["pro__cart"]}
                style={{color: "#b91c1c"}}
              >
                {/* delete */}
                <BsTrash
                    onClick={() => setFlip(true)}
                    onAnimationEnd={() => setFlip(false)}
                    className={flip ? [styles["cart-icon"],styles["flip"]].join(" ") : styles["cart-icon"]}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
