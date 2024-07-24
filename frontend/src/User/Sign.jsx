import React, { useState } from "react";
// import App from "./App.jsx";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { CardActionArea } from "@mui/material";
import FotoUp from "../assets/images/sign_up_foto.svg";
import FotoTop from "../assets/images/sign_top_foto.svg";

export const Sign = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setIsLoading(true); 
    setError(null); 

    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username,
        password
      });
      
      console.log('Login successful:', response.data);
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
          <p>Forgot your password?</p>
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
