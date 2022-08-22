import React from 'react';

// styles
import styles from "./HomeProducts.module.css";

// image
import proImage from "../img/products/f1.jpg"

// icons
import {FaStar} from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const HomeProducts = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.title}>
                    <h1 className={styles['title__head']}>New Arrivals</h1>
                    <p className={styles['title__desc']}>Summer Collection New Modern Design</p>
                </div>
                <div className={styles['arrive-products']}>

                    <div className={styles.product}>
                        <div className={styles.pro__image}>
                            <img src={proImage} alt="" />
                        </div>
                        <div className={styles.pro__text}>
                            <span className={styles.pro__brand}>adidas</span>
                            <span className={styles.pro__name}>cartoon astronaut T-shirt</span>

                            <div className={styles.pro__desc}>
                                <div className={styles['pro__footer-left']}>
                                    <div className={styles.pro__star}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className={styles.pro__count}>$78</span>
                                </div>

                                <div className={styles['pro__cart']}>
                                    <BsCart3 />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.product}>
                        <div className={styles.pro__image}>
                            <img src={proImage} alt="" />
                        </div>
                        <div className={styles.pro__text}>
                            <span className={styles.pro__brand}>adidas</span>
                            <span className={styles.pro__name}>cartoon astronaut T-shirt</span>

                            <div className={styles.pro__desc}>
                                <div className={styles['pro__footer-left']}>
                                    <div className={styles.pro__star}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className={styles.pro__count}>$78</span>
                                </div>

                                <div className={styles['pro__cart']}>
                                    <BsCart3 />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.product}>
                        <div className={styles.pro__image}>
                            <img src={proImage} alt="" />
                        </div>
                        <div className={styles.pro__text}>
                            <span className={styles.pro__brand}>adidas</span>
                            <span className={styles.pro__name}>cartoon astronaut T-shirt</span>

                            <div className={styles.pro__desc}>
                                <div className={styles['pro__footer-left']}>
                                    <div className={styles.pro__star}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className={styles.pro__count}>$78</span>
                                </div>

                                <div className={styles['pro__cart']}>
                                    <BsCart3 />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.product}>
                        <div className={styles.pro__image}>
                            <img src={proImage} alt="" />
                        </div>
                        <div className={styles.pro__text}>
                            <span className={styles.pro__brand}>adidas</span>
                            <span className={styles.pro__name}>cartoon astronaut T-shirt</span>

                            <div className={styles.pro__desc}>
                                <div className={styles['pro__footer-left']}>
                                    <div className={styles.pro__star}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className={styles.pro__count}>$78</span>
                                </div>

                                <div className={styles['pro__cart']}>
                                    <BsCart3 />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.product}>
                        <div className={styles.pro__image}>
                            <img src={proImage} alt="" />
                        </div>
                        <div className={styles.pro__text}>
                            <span className={styles.pro__brand}>adidas</span>
                            <span className={styles.pro__name}>cartoon astronaut T-shirt</span>

                            <div className={styles.pro__desc}>
                                <div className={styles['pro__footer-left']}>
                                    <div className={styles.pro__star}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className={styles.pro__count}>$78</span>
                                </div>

                                <div className={styles['pro__cart']}>
                                    <BsCart3 />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.product}>
                        <div className={styles.pro__image}>
                            <img src={proImage} alt="" />
                        </div>
                        <div className={styles.pro__text}>
                            <span className={styles.pro__brand}>adidas</span>
                            <span className={styles.pro__name}>cartoon astronaut T-shirt</span>

                            <div className={styles.pro__desc}>
                                <div className={styles['pro__footer-left']}>
                                    <div className={styles.pro__star}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className={styles.pro__count}>$78</span>
                                </div>

                                <div className={styles['pro__cart']}>
                                    <BsCart3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default HomeProducts;