import React from 'react';

// image
import app from "../../img/pay/app.jpg";
import play from "../../img/pay/play.jpg";
import pay from "../../img/pay/pay.png";

// icons
import { FaInstagramSquare, FaLinkedin, FaTelegram, FaWhatsappSquare } from "react-icons/fa";

// style
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer} data-aos="fade-up">
            <div className={styles.letter}>
                <div className={styles.letter__text}>
                    <h2>Sign Up For Newsletters</h2>
                    <p>Get E-mail updates about our lastest shop and special offers.</p>
                </div>

                <div className={styles.letter__input}>
                    <input type="text" placeholder='Your email address'/>
                    <button>Sign Up</button>
                </div>
            </div>

            <div className={styles.main}>
                <section className={styles.contact}>
                    <div className={styles.contact__top}>
                        <span className={styles.title}>Contact</span>

                        <ul className={styles.contact__list}>
                            <li className={styles.contact__item}>Address:<span className={styles.contact__body}>Iran Tehran</span></li>
                            <li className={styles.contact__item}>Phone:<span className={styles.contact__body}>+98 910 675 4656</span></li>
                        </ul>
                    </div>

                    <div className={styles.contact__down}>
                        <span className={styles.title}>Follow Me</span>

                        <div className={styles['social-link']}>
                            <a href="#"><FaInstagramSquare /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaTelegram /></a>
                            <a href="#"><FaWhatsappSquare /></a>
                        </div>
                    </div>
                </section>

                <section className={styles.about}>
                    <span className={styles.title}>About</span>

                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>About Me</li>
                        <li className={styles.footer__item}>Delivery Information</li>
                        <li className={styles.footer__item}>Privacy Policy</li>
                        <li className={styles.footer__item}>Terms & Conditions</li>
                        <li className={styles.footer__item}>Contact Me</li>
                    </ul>
                </section>

                <section className={styles.account}>
                    <span className={styles.title}>About</span>

                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>Sign In</li>
                        <li className={styles.footer__item}>View Card</li>
                        <li className={styles.footer__item}>My Wishlist</li>
                        <li className={styles.footer__item}>Track My Order</li>
                        <li className={styles.footer__item}>Help</li>
                    </ul>
                </section>

                <section className={styles.install}>
                    <span className={styles.title}>Install App</span>

                    <div className={styles.install__body}>
                        <span className={styles.install__text}>From App Store or Google Play</span>

                        <div className={styles.install__store}>
                            <img src={app} alt="app store" />
                            <img src={play} alt="google play" />
                        </div>

                        <span className={styles.install__text}>Secured Payment Gateways</span>

                        <div className={styles.install__pay}>
                            <img src={pay} alt="pay" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;