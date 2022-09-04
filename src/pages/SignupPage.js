import React, {useContext, useState} from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

// context
import { authContext } from "../context/AuthContextProvider";

// service
import { signupUsers } from "../services/signupService";

// components
import Input from "../components/shared/Input";

// hook
import useQuery from "../hook/useQuery";

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
  const {setUserData} = useContext(authContext)
  let history = useNavigate();

  // when user click on checkout
  // if user was login redirect to home else redirect to signup page
  const query = useQuery();
  const redirect = query.get('redirect') || "/";

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

      const userData = {
        name,
        email,
        password,
        phoneNumber
      };

      try {
        const { data } = await signupUsers(userData);
        setUserData(data)
        console.log(data);
        setErrors("")
        history(redirect)
      } catch (error) {
        if(error.response && error.response.data.message) {
          setErrors(error.response.data.message)
        }
        console.log(error);
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
            submit
          </button>

          <Link className={styles.signup__link} to={`/login?redirect=${redirect}`}>
            Already have account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
