import React from "react";
import { Link } from "react-router-dom";

// style
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header} data-aos="fade-down">
      <div className={styles.head__text}>
        <h3
          className={styles.head__title}
          data-aos="fade-right"
          data-aos-delay="50"
        >
          Trade-in-Offer
        </h3>
        <h1
          className={styles["head__desc-first"]}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Super value deals
        </h1>
        <h1
          className={styles["head__desc-second"]}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          On all products
        </h1>
        <p
          className={styles.head__footer}
          data-aos="fade-right"
          data-aos-delay="550"
        >
          Save more with couponse and up to 70% Off !
        </p>
        <div
          className={styles.head__link}
          data-aos="fade-right"
          data-aos-delay="700"
        >
          <Link to="/shop">Shop now</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
