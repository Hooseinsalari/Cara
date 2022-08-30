import React from "react";
import { Link } from "react-router-dom";

// style
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <div>
      <div className={styles.signup}>
        <form className={styles.signup__form}>
          <div className={styles.signup__title}>
            <h2>Signup</h2>
          </div>
          <div className={styles.signup__section}>
            <label className={styles.signup__label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.signup__input}
              type="text"
              id="name"
              placeholder="Hossein Salari"
            />
          </div>

          <div className={styles.signup__section}>
            <label className={styles.signup__label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.signup__input}
              type="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className={styles.signup__section}>
            <label className={styles.signup__label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.signup__input}
              type="password"
              id="password"
              placeholder="12345678"
            />
          </div>

          <div className={styles.signup__section}>
            <label className={styles.signup__label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className={styles.signup__input}
              type="password"
              id="confirmPassword"
              placeholder="12345678"
            />
          </div>

          <button className={styles.signup__submit}>submit</button>

          <Link className={styles.signup__link} to="/login">
            Already have account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
