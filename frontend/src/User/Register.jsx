import React, { useState } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { CardActionArea } from "@mui/material";
import MaskedInput from "react-text-mask";
import FotoUp from "../assets/images/sign_up_foto.svg";
import FotoTop from "../assets/images/sign_top_foto.svg";

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('+996');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError(null);

    console.log('Sending data:', {
      username,
      password,
      email,
      mobile
    });

    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        username,
        password,
        email,
        mobile
      });

      console.log('Registration successful:', response.data);
      navigate('/'); // Перенаправление на страницу входа
    } catch (error) {
      console.error('Error response:', error.response);
      if (error.response) {
        setError(error.response.data.error || "Registration failed.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
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
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="register__forms">
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="register__forms">
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="register__forms">
              <MaskedInput
                mask={['+', '9', '9', '6', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
                value={mobile}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (newValue.length <= 15) {
                    setMobile(newValue);
                  }
                }}
                placeholder="Mobile"
                className="input"
              />
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="registerinn__wrapper">
          <h3>Create</h3>
          <CardActionArea className="registerin__btn" onClick={handleRegister}>
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
