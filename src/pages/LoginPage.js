import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

// context
import { authContext } from "../context/AuthContextProvider";

// service
import { loginUsers } from "../services/loginService";

// components
import Input from "../components/shared/Input";

// hooks
import useQuery from "../hooks/useQuery";

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
  const [errors, setErrors] = useState("");
  const { userData, setUserData } = useContext(authContext);
  let navigate = useNavigate();
  const query = useQuery();
  const redirect = query.get("redirect") ? `/${query.get("redirect")}` : "/";
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const { data } = await loginUsers(values);
        setUserData(data);
        setErrors("");
        navigate(redirect);
        if (userData) {
          setLoading(false);
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          setErrors(error.response.data.message);
          setLoading(false);
        }
      }
    },
    validationSchema,
  });

  return (
    <div className={styles.login}>
      <form onSubmit={formik.handleSubmit} className={styles.login__form}>
        <div className={styles.login__title}>
          <h2>Login</h2>
        </div>

        <Input
          label="Email"
          name="email"
          formik={formik}
          type="email"
          placeholder="example@gmail.com"
        />

        <Input
          label="Password"
          name="password"
          formik={formik}
          type="password"
          placeholder="12345678"
        />

        {errors ? <p className={styles.login__error}>{errors}</p> : null}

        <button
          type="submit"
          disabled={!formik.isValid}
          className={styles.login__submit}
        >
          {loading ? (
            <span className={styles.loader}></span>
          ) : (
            <span className={styles["login__btn-text"]}>submit</span>
          )}
        </button>

        <Link
          className={styles.login__link}
          to={`/signup?redirect=${redirect.substring(1)}`}
        >
          Create account
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
