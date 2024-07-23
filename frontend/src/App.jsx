import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { Home } from "./pages/Home/Home";
import { Categoris } from "./pages/Categoris/Categoris";
import { Bascket } from "./pages/Bascket/Bascket";
import { Acount } from "./pages/Acount/Acount";
import "./App.css";
import Single from "./pages/Single/Single";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/*" element={<Categoris />} />
        <Route path="/basket" element={<Bascket />} />
        <Route path="/account" element={<Acount />} />
        <Route path="/product/:id" element={<Single />} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
