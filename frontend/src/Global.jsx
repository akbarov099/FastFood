import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { Home } from "./pages/Home/Home";
import { Categoris } from "./pages/Categoris/Categoris";
import { Bascket } from "./pages/Bascket/Bascket";
import { Acount } from "./pages/Acount/Acount";
import Single from "./pages/Single/Single";

function Global() {
  const location = useLocation();
  const hideNavigation = location.pathname.startsWith('/product/');

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/*" element={<Categoris />} />
        <Route path="/basket" element={<Bascket />} />
        <Route path="/account" element={<Acount />} />
        <Route path="/product/:id" element={<Single />} />
      </Routes>
      {!hideNavigation && <Navigation />}
    </>
  );
}

export default Global;
