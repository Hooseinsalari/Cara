import React, { useEffect, useRef, useState } from "react";

// icons
import {
  FiEdit,
  FiMail,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

// styles
import styles from "./Profile.module.css";

const Profile = ({ userData, setUserData }) => {
  const [isShow, setIsShow] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeProfile = (e) => {
      if (e.composedPath()[0] !== btnRef.current) {
        setIsShow(false);
      }
    };

    document.body.addEventListener("click", closeProfile);

    return () => document.body.removeEventListener("click", closeProfile);
  }, []);

  const profileHandler = (event) => {
    event.stopPropagation();
    setIsShow((prevState) => !prevState);
  };

  const logoutHandler = () => {
    localStorage.removeItem("authState");
    setUserData(null);
  };

  return (
    <div className={styles.profile}>
      <button
        ref={btnRef}
        onClick={profileHandler}
        className={
          isShow
            ? [styles["profile__icon"], styles["profile__icon-active"]].join(
                " "
              )
            : styles["profile__icon"]
        }
      >
        <FiUser />
      </button>

      <div
        className={
          isShow
            ? [styles["profile__menu"], styles["profile__menu-active"]].join(
                " "
              )
            : styles["profile__menu"]
        }
      >
        <h3 className={styles.profile__name}>{userData.name}</h3>
        <p className={styles.profile__email}>{userData.email}</p>
        <ul>
          <li className={styles.profile__item}>
            <FaRegUserCircle className={styles.item__icon} />{" "}
            <span className={styles.item__name}>my profile</span>
          </li>
          <li className={styles.profile__item}>
            <FiEdit className={styles.item__icon} />{" "}
            <span className={styles.item__name}>edit profile</span>
          </li>
          <li className={styles.profile__item}>
            <FiMail className={styles.item__icon} />{" "}
            <span className={styles.item__name}>inbox</span>
          </li>
          <li className={styles.profile__item}>
            <FiSettings className={styles.item__icon} />{" "}
            <span className={styles.item__name}>setting</span>
          </li>
          <li className={styles.profile__item}>
            <FiHelpCircle className={styles.item__icon} />{" "}
            <span className={styles.item__name}>help</span>
          </li>
          <button className={styles.profile__btn} onClick={logoutHandler}>
            <FiLogOut className={styles.item__icon} />{" "}
            <span className={styles.item__name}>logout</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
