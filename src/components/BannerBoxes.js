import React from "react";
import { Link } from "react-router-dom";

// style
import styles from "./BannerBoxes.module.css";

const BannerBoxes = () => {
  return (
    <div className={styles.boxes}>
      <div className={styles.top__boxes} data-aos="fade-up">
        <div className={[styles["left__box"], styles["top__box"]].join(" ")}>
          <h3>crazy deals</h3>
          <h1>buy 1 get 1 free</h1>
          <p>The best classic dress is on sale at cara</p>
          <Link className={styles.hero__btn} to="/">
            Learn More
          </Link>
        </div>
        <div className={[styles["right__box"], styles["top__box"]].join(" ")}>
          <h3>spring/summer</h3>
          <h1>upcomming season</h1>
          <p>The best classic dress is on sale at cara</p>
          <Link className={styles.hero__btn} to="/">
            Collection
          </Link>
        </div>
      </div>

      <div className={styles.bottom__boxes} data-aos="fade-up">
        <div className={[styles["box"], styles["first-box"]].join(" ")}>
          <div className={styles.box__text}>
            <h2>SEASONAL SALE</h2>
            <p>Winter Collection - 50% Off</p>
          </div>
        </div>

        <div className={[styles["box"], styles["second-box"]].join(" ")}>
          <h2>NEW COLLECTION</h2>
          <p>Spring/summer 2022</p>
        </div>

        <div className={[styles["box"], styles["third-box"]].join(" ")}>
          <h2>T-SHIRT</h2>
          <p>New Trend</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxes;
