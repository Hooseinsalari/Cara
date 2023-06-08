import React from "react";
import { Link } from "react-router-dom";

// image
import a6 from "../img/about/a6.jpg";

// video
import appVideo from "../img/about/1.mp4";

// styles
import styles from "./AboutPage.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.about__header} data-aos="fade-down">
        <h1 className={styles.about__title}>#AboutUs</h1>
        <p className={styles.about__subtitle}>Get to know us and shop safely</p>
      </div>

      <div className={styles.about__head} data-aos="fade-up">
        <div className={styles.about__image}>
          <LazyLoadImage src={a6} effect="black-and-white" />
        </div>

        <div className={styles.about__text}>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            architecto error laborum facilis autem laboriosam dolorem dictaa
            rchitecto error laborum facilis autem laboriosam dolorem dictaar
            chitecto error laborum facilis autem laboriosam dolorem dicta nobis
            dolor nemo? Voluptates ipsam dolorem hic mollitia, fuga excepturi
            doloremque voluptatem expedita.
          </p>
        </div>
      </div>

      <div className={styles.about__app} data-aos="fade-up">
        <h1>
          Download Our <Link to="/about">App</Link>
        </h1>

        <div className={styles.about__video}>
          <video muted autoPlay loop src={appVideo}></video>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
