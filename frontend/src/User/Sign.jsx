import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { CardActionArea } from "@mui/material";
import FotoUp from "../assets/images/sign_up_foto.svg";
import FotoTop from "../assets/images/sign_top_foto.svg";
import Global from "../Global";

export const Sign = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        username,
        password,
      });

      console.log("Login successful:", response.data);

      // Save username and password in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("authToken", response.data.token);

      setIsAuthenticated(true);
      navigate("/"); // Redirect to the Global component or another page
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "Login failed.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Global />;
  }

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
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="sign__forms">
              <BiSolidLockAlt className="sign__icon-password" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <NavLink to="/forgot">
            <p>Forgot your password?</p>
          </NavLink>
        </div>
        <div className="signinn__wrapper">
          <h3>Sign in</h3>
          {isLoading ? (
            <div className="loading-indicator">Loading...</div>
          ) : (
            <CardActionArea className="signin__btn" onClick={handleSubmit}>
              <FaArrowRightLong />
            </CardActionArea>
          )}
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="signcreated">
          Don’t have an account? <NavLink to="/register">Create</NavLink>
        </div>
      </div>
    </section>
  );
};
