import React from "react";

// function
import { shorten } from "../../helper/function";

// styles
import styles from "./Cart.module.css";

// icons
import { BiPlus, BiMinus } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const Cart = ({ item, dispatch }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__detail}>
        <img className={styles.cart__image} src={item.image} alt="" />
        <div className={styles.cart__text}>
          <span className={styles.cart__brand}>addidas</span>
          <span className={styles.cart__title}>{shorten(item.title)}</span>
        </div>
      </div>

      <div className={styles.cart__btns}>
        {item.quantity > 1 ? (
          <button
            className={styles["cart__decrease-btn"]}
            onClick={() => dispatch({ type: "DECREASE", payload: item })}
          >
            <BiMinus />
          </button>
        ) : (
          <button
            className={styles["cart__delete-btn"]}
            onClick={() => dispatch({ type: "REMOVE__ITEM", payload: item })}
          >
            <BsTrash />
          </button>
        )}
        <span className={styles.cart__quantity}>{item.quantity}</span>
        <button
          className={styles["cart__increase-btn"]}
          onClick={() => dispatch({ type: "INCREASE", payload: item })}
        >
          <BiPlus />
        </button>
      </div>

      <span className={styles.cart__price}>${item.price}</span>
    </div>
  );
};

export default Cart;
