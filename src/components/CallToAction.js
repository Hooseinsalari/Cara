import React from 'react';

// styles
import styles from "./CallToAction.module.css";

const CallToAction = () => {
    return (
        <div className={styles.call}>
            <span className={styles.call__title}>Repair Services</span>
            <h2 className={styles.call__desc}>Up to <span className={styles.call__off}>70% Off</span> - All t-Shirts</h2>
            <a className={styles.call__link} href="#">Explore More</a>
        </div>
    );
};

export default CallToAction;