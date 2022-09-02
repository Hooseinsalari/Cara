import React from "react";
import { Link } from "react-router-dom";

// components
import Input from "../components/shared/Input";

// style
import styles from "./SignupPage.module.css";

// formik
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().trim().required("Name is Required"),
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password should be 8 chars minimum"),
  confirmPassword: yup
    .string()
    .required("Retype Your Password")
    .oneOf([yup.ref("password")], "Password Do Not Match"),
});

const SignupPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema,
  });

  return (
    <div>
      <div className={styles.signup}>
        <form onSubmit={formik.handleSubmit} className={styles.signup__form}>
          <div className={styles.signup__title}>
            <h2>Signup</h2>
          </div>

          <Input label="Name" name="name" formik={formik} placeholder="Hossein Salari" />

          <Input label="Email" name="email" formik={formik} type="email" placeholder="example@gmail.com" />

          <Input
            label="Password"
            name="password"
            formik={formik}
            type="password"
            placeholder="12345678"
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            formik={formik}
            type="password"
            placeholder="12345678"
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className={styles.signup__submit}
          >
            submit
          </button>

          <Link className={styles.signup__link} to="/login">
            Already have account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
