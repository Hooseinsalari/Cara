import React from "react";

// icons
import { FiClock, FiPhone, FiMail, FiMap } from "react-icons/fi";

// images
import employeeOne from "../img/people/1.png";
import employeeTwo from "../img/people/2.png";
import employeeThree from "../img/people/3.png";

// style
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div>
      <div className={styles.contact__header} data-aos="fade-down">
        <h1 className={styles.contact__title}>#Let's_to_talk</h1>
        <p className={styles.contact__subtitle}>
          Leave a message, I love to hear from You!
        </p>
      </div>

      <div className={styles.contact__main} data-aos="fade-up">
        <div className={styles.contact__details}>
          <h4 className={styles.details__header}>GET IN TOUCH</h4>
          <h1 className={styles.details__title}>
            Visit one of our agency locations <br />
            or contact us today
          </h1>
          <h4 className={styles.details__addres}>Head Office</h4>
          <ul>
            <li>
              <FiMap /> <span>Iran, Tehran, Tehran</span>
            </li>
            <li>
              <FiMail /> <span>hossein.salari002@gmail.com</span>
            </li>
            <li>
              <FiPhone /> <span>09106754656</span>
            </li>
            <li>
              <FiClock /> <span>Saturday to Friday</span>
            </li>
          </ul>
        </div>

        <div className={styles.contact__map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.075520738469!2d51.33551621460575!3d35.699759136564246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05737fbcc9%3A0x274833de5c05c70c!2sAzadi%20Square%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2ssg!4v1664093858390!5m2!1sen!2ssg"
            width="600"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>

      <div className={styles.comment} data-aos="fade-up">
        <div className={styles.comment__form}>
          <h4>LEAVE A MESSAGE</h4>
          <h2>I love to hear from you</h2>

          <form id={styles.form}>
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your email" />
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10" placeholder="Comment..."></textarea>
            <button className={styles.form__submit}>submit</button>
          </form>
        </div>

        <div className={styles.employees}>
          <div className={styles.employee}>
            <div className={styles.employee__img}>
              <img src={employeeOne} alt="employee" />
            </div>

            <div className={styles.employee__details}>
              <h3 className={styles.employee__name}>John Doe</h3>
              <p className={styles.employee__position}>Frontend Developer</p>
              <p className={styles.employee__number}>09106754656</p>
              <p className={styles.employee__email}>
                hossein.salari002@gmail.com
              </p>
            </div>
          </div>

          <div className={styles.employee}>
            <div className={styles.employee__img}>
              <img src={employeeTwo} alt="employee" />
            </div>

            <div className={styles.employee__details}>
              <h3 className={styles.employee__name}>Lionel Messi</h3>
              <p className={styles.employee__position}>Digital marketing</p>
              <p className={styles.employee__number}>09106754656</p>
              <p className={styles.employee__email}>
                hossein.salari002@gmail.com
              </p>
            </div>
          </div>

          <div className={styles.employee}>
            <div className={styles.employee__img}>
              <img src={employeeThree} alt="employee" />
            </div>

            <div className={styles.employee__details}>
              <h3 className={styles.employee__name}>Angelina Jolie</h3>
              <p className={styles.employee__position}>backend Developer</p>
              <p className={styles.employee__number}>09106754656</p>
              <p className={styles.employee__email}>
                hossein.salari002@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
