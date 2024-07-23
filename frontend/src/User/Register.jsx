import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { CardActionArea } from "@mui/material";
import InputMask from "react-input-mask";
import FotoUp from "../assets/images/sign_up_foto.svg"
import FotoTop from "../assets/images/sign_top_foto.svg"

export const Register = () => {
  const [mobile, setMobile] = useState("+996");

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  return (
    <section className="register">
      <img className="register_foto_up" src={FotoUp} alt="" />
      <img className="register_foto_top" src={FotoTop} alt="" />
      <div className="container">
        <div className="register__wrapper">
          <h2>Create account</h2>
          <div className="register__forms__wrapper">

          <div className="register__forms">
            <FaUser className="register__icon" />
            <input type="text" placeholder="Username" />
          </div>

          <div className="register__forms">
            <BiSolidLockAlt className="register__icon-password" />
            <input type="password" placeholder="Password" />
          </div>

            <div className="register__forms">
              <MdEmail className="register__icon-password" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="register__forms">
              <ImMobile className="register__icon-password" />
              <InputMask
                mask="+996 999 99 99 99"
                value={mobile}
                onChange={handleMobileChange}
                placeholder="Mobile"
              >
                {(inputProps) => <input {...inputProps} type="text" />}
              </InputMask>
            </div>
          </div>
        </div>
        <div className="registerinn__wrapper">
          <h3>Create</h3>
          <CardActionArea className="registerin__btn">
            <FaArrowRightLong />
          </CardActionArea>
        </div>
        <div className="registercreated">
          Already have an account? <NavLink to="/">Sign In</NavLink>
        </div>
      </div>
    </section>
  );
};
