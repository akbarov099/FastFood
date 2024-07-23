import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import Logo from "../../assets/images/logo.png";


export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <IoSearchSharp className="header__icon" />
          <img className="header__logo" src={Logo} alt="Logo" />
          <IoChatbubblesOutline className="header__icon" />
        </div>
      </div>
    </header>
  );
};
