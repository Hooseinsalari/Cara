// this component use in cart page if cart is empty
import React from "react";
import { Link } from "react-router-dom";

// icons
import { FcInfo } from "react-icons/fc";

// styles
import styles from "./ClearMessage.module.css";

const ClearMessage = () => {
  return (
    <div className={styles.clear} data-aos="zoom-in-up" data-aos-duration="800">
      <FcInfo className={styles.clear__icon} />
      <h2 className={styles.clear__title}>Empty!</h2>
      <span className={styles.clear__message}>
        Your cart is Empty!
        <br />
        Let's add something <Link to="/shop">Click Here.</Link>
      </span>
    </div>
  );
};

export default ClearMessage;
