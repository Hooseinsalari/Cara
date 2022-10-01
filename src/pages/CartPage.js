import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./CartPage.module.css";

// component
import Cart from "../components/shared/Cart";
import CheckoutMessage from "../components/CheckoutMessage";
import ClearMessage from "../components/ClearMessage";

// context
import { cartContext } from "../context/CartContextProvider";
import { authContext } from "../context/AuthContextProvider";

const CartPage = () => {
  const { state, dispatch } = useContext(cartContext);
  const {userData} = useContext(authContext)

  console.log(userData);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state.checkout, state.selectedItems.length === 0])

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
            <Link
              to={userData ? '/cart' : '/login?redirect=cart'}
              onClick={() => userData._id ? dispatch({ type: "CHECKOUT" }) : null}
              className={styles.cart__checkout}
            >
              Checkout
            </Link>
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
          <CheckoutMessage />
        </div>
      ) : (
        <div className={styles.clear}>
          <ClearMessage />
        </div>
      )}
    </div>
  );
};

export default CartPage;
