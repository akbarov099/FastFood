import React, { useEffect, useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [value, setValue] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    const mappedValue = currentPath === "" ? "home" : currentPath;
    setValue(mappedValue);
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("hoverState", JSON.stringify(newValue));
  };

  return (
    <nav className="navigation">
      <div className="container">
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            value="home"
            icon={<BiHomeAlt2 />}
          />
          <BottomNavigationAction
            component={Link}
            to="/categories"
            label="Category"
            value="categories"
            icon={<BiSolidCategory />}
          />
          <BottomNavigationAction
            component={Link}
            to="/basket"
            label="Basket"
            value="basket"
            icon={<SlBasket />}
          />
          <BottomNavigationAction
            component={Link}
            to="/account"
            label="Account"
            value="account"
            icon={<FaRegUser />}
          />
        </BottomNavigation>
      </div>
    </nav>
  );
};
