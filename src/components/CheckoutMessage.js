import React from "react";
import { Link } from "react-router-dom";

// icons
import { FcOk } from "react-icons/fc";

// styles
import styles from "./CheckoutMessage.module.css";

const CheckoutMessage = () => {
  return (
    <div
      className={styles.checkout}
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <FcOk className={styles.checkout__success} />
      <h2 className={styles.checkout__title}>Thank You!</h2>
      <p className={styles.checkout__message}>
        Your purchase was successful,
        <br /> Thank you for your trust
      </p>
      <span className={styles.checkout__link}>
        Back to Home Page, <Link to="/">Click Here.</Link>
      </span>
    </div>
  );
};

export default CheckoutMessage;
