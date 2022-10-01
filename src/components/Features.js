import React from "react";

// styles
import styles from "./Features.module.css";

// images
import f1 from "../img/features/f1.png";
import f2 from "../img/features/f2.png";
import f3 from "../img/features/f3.png";
import f4 from "../img/features/f4.png";
import f5 from "../img/features/f5.png";
import f6 from "../img/features/f6.png";

const Features = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className={styles.feat}
    >
      <div className={styles.feat__item}>
        <img src={f1} alt="features" />
        <span style={{ color: "#074A51", background: "#dbf4f6" }}>
          Free Shipping
        </span>
      </div>
      <div className={styles.feat__item}>
        <img src={f2} alt="features" />
        <span style={{ color: "#87004c", background: "#fbcce8" }}>
          Online Order
        </span>
      </div>
      <div className={styles.feat__item}>
        <img src={f3} alt="features" />
        <span style={{ color: "#426a04", background: "#e4f7c5" }}>
          Save Money
        </span>
      </div>
      <div className={styles.feat__item}>
        <img src={f4} alt="features" />
        <span style={{ color: "#074A51", background: "#dbf4f6" }}>
          Promotions
        </span>
      </div>
      <div className={styles.feat__item}>
        <img src={f5} alt="features" />
        <span style={{ color: "#463e5e", background: "#dfd4ff" }}>
          Happy Sell
        </span>
      </div>
      <div className={styles.feat__item}>
        <img src={f6} alt="features" />
        <span style={{ color: "#564034", background: "#f1d8c9" }}>
          F24/7 Support
        </span>
      </div>
    </div>
  );
};

export default Features;
