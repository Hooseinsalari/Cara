import React from 'react';

// style
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.head__text}>
                <h3 className={styles.head__title}>Trade-in-Offer</h3>
                <h1 className={styles['head__desc-first']}>Super value deals</h1>
                <h1 className={styles['head__desc-second']}>On all products</h1>
                <p className={styles.head__footer}>Save more with couponse and up to 70% Off !</p>
                <div className={styles.head__link}>
                    <a href="#">Shop now</a>
                </div>
            </div>
        </header>
    );
};

export default Header;