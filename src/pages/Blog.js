import React from "react";
import { Link } from "react-router-dom";

// images
import b1 from "../img/blog/b1.jpg"
import b2 from "../img/blog/b2.jpg"
import b3 from "../img/blog/b3.jpg"
import b4 from "../img/blog/b4.jpg"

// style
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__header} data-aos="fade-down">
        <h1 className={styles.blog__title}>#Readmore</h1>
        <p className={styles.blog__subtitle}>
          Read all case studies about our product
        </p>
      </div>

      <div className={styles.blog__items}>
        <div className={styles.blog__box} data-aos="fade-up">
            <div className={styles.blog__img}>
                <img src={b1} alt="banner" />
            </div>

            <div className={styles.blog__details}>
                <h2>The Cotton-Jersey Zip-Up Hoodie</h2>
                <p>
                    Kickstarter man braid godard coloring book. Raclette waistcoat
                    selfies yr wolf chartreuse hexagon irony, godard ...
                </p>
                <Link to="/blog">CONTINUE READING</Link>
            </div>

            <h1 className={styles.blog__date}>12/01</h1>
        </div>

        <div className={styles.blog__box} data-aos="fade-up">
            <div className={styles.blog__img}>
                <img src={b2} alt="banner" />
            </div>

            <div className={styles.blog__details}>
                <h2>How to Style a Quiff</h2>
                <p>
                    Kickstarter man braid godard coloring book. Raclette waistcoat
                    selfies yr wolf chartreuse hexagon irony, godard ...
                </p>
                <Link to="/blog">CONTINUE READING</Link>
            </div>

            <h1 className={styles.blog__date}>18/01</h1>
        </div>

        <div className={styles.blog__box} data-aos="fade-up">
            <div className={styles.blog__img}>
                <img src={b3} alt="banner" />
            </div>

            <div className={styles.blog__details}>
                <h2>Must-Have Skater Girl Items</h2>
                <p>
                    Kickstarter man braid godard coloring book. Raclette waistcoat
                    selfies yr wolf chartreuse hexagon irony, godard ...
                </p>
                <Link to="/blog">CONTINUE READING</Link>
            </div>

            <h1 className={styles.blog__date}>14/01</h1>
        </div>

        <div className={styles.blog__box} data-aos="fade-up">
            <div className={styles.blog__img}>
                <img src={b4} alt="banner" />
            </div>

            <div className={styles.blog__details}>
                <h2>Runway-Inspired Trends</h2>
                <p>
                    Kickstarter man braid godard coloring book. Raclette waistcoat
                    selfies yr wolf chartreuse hexagon irony, godard ...
                </p>
                <Link to="/blog">CONTINUE READING</Link>
            </div>

            <h1 className={styles.blog__date}>16/01</h1>
        </div>

      </div>
    </div>
  );
};

export default Blog;
