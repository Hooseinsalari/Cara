import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// context
import { cartContext } from "../../context/CartContextProvider";

// style
import styles from "./Product.module.css";

// icons
import { FaStar } from "react-icons/fa";
import { BsCart3, BsTrash } from "react-icons/bs";

// functions
import { isInCart, shorten } from "../../helper/function";

// lazy loading
import { LazyLoadImage } from "react-lazy-load-image-component";

const Product = ({ product }) => {
  const { state, dispatch } = useContext(cartContext);

  const [flip, setFlip] = useState(false);

  return (
    <div className={styles["container"]}>
      <div className={styles.product}>
        {/* product detail link */}
        <Link
          to={`/shop/product/${product._id}`}
          className={styles["product__detail"]}
        >
          detail
        </Link>

        <div className={styles.pro__image}>
          <LazyLoadImage
            src={product.image}
            alt={product.brand}
            width={240}
            height={240}
            effect="blur"
          />
        </div>
        <div className={styles.pro__text}>
          <span className={styles.pro__brand}>{product.brand}</span>
          <span className={styles.pro__name}>{shorten(product.name)}</span>

          <div className={styles.pro__desc}>
            <div className={styles["pro__footer-left"]}>
              <div className={styles.pro__star}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className={styles.pro__count}>${product.price}</span>
            </div>

            {!isInCart(state, product._id) ? (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
                className={styles["pro__cart"]}
              >
                <BsCart3
                  onClick={() => setFlip(true)}
                  onAnimationEnd={() => setFlip(false)}
                  className={
                    flip
                      ? [styles["cart-icon"], styles["flip"]].join(" ")
                      : styles["cart-icon"]
                  }
                />
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE__ITEM", payload: product })
                }
                className={styles["pro__cart"]}
                style={{ color: "#b91c1c" }}
              >
                {/* delete */}
                <BsTrash
                  onClick={() => setFlip(true)}
                  onAnimationEnd={() => setFlip(false)}
                  className={
                    flip
                      ? [styles["cart-icon"], styles["flip"]].join(" ")
                      : styles["cart-icon"]
                  }
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
