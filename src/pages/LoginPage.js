import React from "react";
import { Link } from "react-router-dom";

// style
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <form className={styles.login__form}>
        <div className={styles.login__title}>
          <h2>Login</h2>
        </div>
        <div className={styles.login__section}>
          <label className={styles.login__label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.login__input}
            type="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>

        <div className={styles.login__section}>
          <label className={styles.login__label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.login__input}
            type="password"
            id="password"
            placeholder="12345678"
          />
        </div>

        <button className={styles.login__submit}>submit</button>

        <Link className={styles.login__link} to="/signup">Create account</Link>
      </form>
    </div>
  );
};

export default LoginPage;
