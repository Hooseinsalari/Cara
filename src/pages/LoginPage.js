import React from "react";
import { Link } from "react-router-dom";

// components
import Input from "../components/shared/Input";

// style
import styles from "./LoginPage.module.css";

// formik
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password should be 8 chars minimum"),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema,
  });

  return (
    <div className={styles.login}>
      <form onSubmit={formik.handleSubmit} className={styles.login__form}>
        <div className={styles.login__title}>
          <h2>Login</h2>
        </div>

        <Input label="Email" name="email" formik={formik} type="email" placeholder="example@gmail.com" />

        <Input
          label="Password"
          name="password"
          formik={formik}
          type="password"
          placeholder="12345678"
        />

        <button
          type="submit"
          disabled={!formik.isValid}
          className={styles.login__submit}
        >
          submit
        </button>

        <Link className={styles.login__link} to="/signup">
          Create account
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
