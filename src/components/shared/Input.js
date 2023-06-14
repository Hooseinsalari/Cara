import React from "react";

// styles
import styles from "./Input.module.css";

const Input = ({ label, name, formik, type = "text", placeholder }) => {
  return (
    <div className={styles.section}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
      autoComplete="off"
        className={
          formik.errors[name] && formik.touched[name]
            ? [styles["input"], styles["input-error"]].join(" ")
            : styles.input
        }
        type={type}
        id={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className={styles.error}>{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Input;
