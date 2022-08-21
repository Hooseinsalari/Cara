import React, { useState } from 'react';

// styles
import styles from './Navbar.module.css';

// image
import logo from "../../img/logo.png"

// icons
import { FaBars, FaTimes } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const menuHandler = () => {
        setToggle((prevState) => !prevState)
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.nav__right}>
                <div onClick={menuHandler} className={styles.nav__toggle}>
                    <FaBars />
                </div>

                <div className={toggle ? [styles['nav__menu'],styles['nav__menu-active']].join(' ') : styles.nav__menu}>
                    <div onClick={menuHandler} className={styles.nav__close}>
                        <FaTimes />
                    </div>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <a className={styles.nav__link} href="#">Home</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a className={styles.nav__link} href="#">Shop</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a className={styles.nav__link} href="#">Blog</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a className={styles.nav__link} href="#">About</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.nav__card}>
                    <BsHandbag />
                </div>

                <div className={styles.nav__account}>
                    <span>SingnIn/Login</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;