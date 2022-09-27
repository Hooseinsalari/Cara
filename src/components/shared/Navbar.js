import React, { useContext, useState } from "react";

import { NavLink } from "react-router-dom";

// context
import { authContext } from "../../context/AuthContextProvider";

// component
import Profile from "../Profile";

// styles
import styles from "./Navbar.module.css";

// image
import logo from "../../img/logo.png";

// icons
import { FaBars } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { userData, setUserData } = useContext(authContext);
  
  const menuHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.nav__logo}>
        <img src={logo} alt="logo" />
      </NavLink>

      <div
        className={
          toggle
            ? [styles["nav__right"], styles["nav__right-active"]].join(" ")
            : styles.nav__right
        }
      >
        <div onClick={menuHandler} className={styles.nav__toggle}>
          <FaBars />
        </div>

        <div
          className={
            toggle
              ? [styles["nav__menu"], styles["nav__menu-active"]].join(" ")
              : styles.nav__menu
          }
        >
          <div onClick={menuHandler} className={styles.nav__close}>
            <IoMdClose />
          </div>

          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <NavLink
                onClick={() => setToggle(false)} //for close menu
                className={({ isActive }) =>
                  isActive
                    ? [styles["nav__link"], styles["nav__link-active"]].join(
                        " "
                      )
                    : styles.nav__link
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                onClick={() => setToggle(false)} //for close menu
                className={({ isActive }) =>
                  isActive
                    ? [styles["nav__link"], styles["nav__link-active"]].join(
                        " "
                      )
                    : styles.nav__link
                }
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                onClick={() => setToggle(false)} //for close menu
                className={({ isActive }) =>
                  isActive
                    ? [styles["nav__link"], styles["nav__link-active"]].join(
                        " "
                      )
                    : styles.nav__link
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                onClick={() => setToggle(false)} //for close menu
                className={({ isActive }) =>
                  isActive
                    ? [styles["nav__link"], styles["nav__link-active"]].join(
                        " "
                      )
                    : styles.nav__link
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                onClick={() => setToggle(false)} //for close menu
                className={({ isActive }) =>
                  isActive
                    ? [styles["nav__link"], styles["nav__link-active"]].join(
                        " "
                      )
                    : styles.nav__link
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink
          onClick={() => setToggle(false)} //for close menu
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? [styles["nav__cart"], styles["nav__cart-active"]].join(" ")
              : styles.nav__cart
          }
        >
          <BsHandbag />
        </NavLink>

        {/* if userData was true show profile else show login icon */}
        {userData ? (
          <Profile userData={userData} setUserData={setUserData} />
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? [styles["nav__account"], styles["nav__account-active"]].join(
                    " "
                  )
                : styles.nav__account
            }
          >
            <>
              <span className={styles["nav__account-text"]}>Login</span>
              <span>
                <FiLogIn />
              </span>
            </>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
