import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// context
import { authContext } from "../context/AuthContextProvider";

// service
import { signupUsers } from "../services/signupService";

// components
import Input from "../components/shared/Input";

// hooks
import useQuery from "../hooks/useQuery";

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
  phoneNumber: yup
    .string()
    .required("Phone Number is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone Number is Not Valid"
    ),
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
  const [errors, setErrors] = useState("");
  const { userData, setUserData } = useContext(authContext);
  let navigate = useNavigate();
  const query = useQuery();
  const redirect = query.get("redirect") ? `/${query.get("redirect")}` : "/";
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      const { name, email, password, phoneNumber } = values;

      const userInformation = {
        name,
        email,
        password,
        phoneNumber,
      };

      try {
        setLoading(true);
        const { data } = await signupUsers(userInformation);
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
    <div>
      <div className={styles.signup}>
        <form onSubmit={formik.handleSubmit} className={styles.signup__form}>
          <div className={styles.signup__title}>
            <h2>Signup</h2>
          </div>

          <Input
            label="Name"
            name="name"
            formik={formik}
            placeholder="Hossein Salari"
          />

          <Input
            label="Email"
            name="email"
            formik={formik}
            type="email"
            placeholder="example@gmail.com"
          />

          <Input
            label="Phone number"
            name="phoneNumber"
            formik={formik}
            type="tel"
            placeholder="09121234567"
          />

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

          {errors ? <p className={styles.signup__error}>{errors}</p> : null}

          <button
            type="submit"
            disabled={!formik.isValid}
            className={styles.signup__submit}
          >
            {loading ? (
              <span className={styles.loader}></span>
            ) : (
              <span className={styles["signup__btn-text"]}>submit</span>
            )}
          </button>

          <Link
            className={styles.signup__link}
            to={`/login?redirect=${redirect.substring(1)}`}
          >
            Already have account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
