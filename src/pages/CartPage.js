import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./CartPage.module.css";

// component
import Cart from "../components/shared/Cart";

// context
import { cartContext } from "../context/CartContextProvider";

const CartPage = () => {
  const { state, dispatch } = useContext(cartContext);

  const renderCart = () => {
    return (
      <div className={styles.cart}>
        <div className={styles.left}>
          {state.selectedItems.map((item) => (
            <Cart key={item._id} item={item} dispatch={dispatch} />
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.top}>
            <label>
              Total Items: <span>{state.itemsCounter}</span>
            </label>
            <label>
              Total Payment: <span>${state.total}</span>
            </label>
          </div>

          <div className={styles.cart__btns}>
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className={styles.cart__clear}
            >
              clear
            </button>
            <button
              onClick={() => dispatch({ type: "CHECKOUT" })}
              className={styles.cart__checkout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {state.selectedItems.length ? (
        renderCart()
      ) : state.checkout ? (
        <div className={styles.checkout}>
          <h1>Checkout successfully</h1>
          <Link to="/">Home Page</Link>
        </div>
      ) : (
        <div className={styles.clear}>
          <h1>Your Cart Is Empty</h1>
          <Link to="/shop">Let's add</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
