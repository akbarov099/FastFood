import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { CardActionArea } from "@mui/material";
import FotoUp from "../assets/images/sign_up_foto.svg"
import FotoTop from "../assets/images/sign_top_foto.svg"


export const Sign = () => {
  return (
    <section className="sign">
      <img className="register_foto_up" src={FotoUp} alt="" />
      <img className="register_foto_top" src={FotoTop} alt="" />
      <div className="container">
        <div className="sign__wrapper">
          <h1>Hello</h1>
          <h3>Sign in to your account</h3>
          <div className="sign__forms__wrapper">
            <div className="sign__forms">
              <FaUser className="sign__icon" />
              <input type="text" placeholder="Username" />
            </div>

            <div className="sign__forms">
              <BiSolidLockAlt className="sign__icon-password" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <p>Forgot your password?</p>
        </div>
        <div className="signinn__wrapper">
          <h3>Sign in</h3>
          <CardActionArea className="signin__btn">
            <FaArrowRightLong />
          </CardActionArea>
        </div>
        <div className="signcreated">
          Don’t have an account ? <NavLink to="/register">Create</NavLink>
        </div>
      </div>
    </section>
  );
};
