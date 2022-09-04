import React, {useState, useContext} from "react";

import { Link, useNavigate } from "react-router-dom";

// context
import { authContext } from "../context/AuthContextProvider";

// service
import { loginUsers } from "../services/loginService";

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
  const [errors, setErrors] = useState("");
  const {setUserData} = useContext(authContext)
  let history = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await loginUsers(values);
        setUserData(data)
        console.log(data);
        setErrors("");
        history("/")
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data.message) {
          setErrors(error.response.data.message);
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
          submit
        </button>

        <Link className={styles.login__link} to='/signup'>
          Create account
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
