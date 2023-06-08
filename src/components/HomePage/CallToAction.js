import React from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.call} data-aos="fade-up">
      <span className={styles.call__title}>Repair Services</span>
      <h2 className={styles.call__desc}>
        Up to <span className={styles.call__off}>70% Off</span> - All t-Shirts
      </h2>
      <Link className={styles.call__link} to="/">
        Explore More
      </Link>
    </div>
  );
};

export default CallToAction;
