import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Sign } from "./Sign";
import { Register } from "./Register"; // Ваш компонент регистрации


export const User = () => {
  return (
    <Routes>
      <Route path="/" element={<Sign />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
