import React from "react";
import Panel from "../../Components/Panel/Panel";
import { Routes, Route, Navigate } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { Category } from "../../pages/Categoris/Category/Category";
import { FastFood } from "../../pages/Categoris/Category/FastFood/FastFood";
import { Drinks } from "../../pages/Categoris/Category/Drinks/Drinks";
import { Desserts } from "../../pages/Categoris/Category/Desserts/Desserts";
import { NationalDishes } from "../../pages/Categoris/Category/NationalDishes/NationalDishes";
import { Salad } from "../../pages/Categoris/Category/Salad/Salad";
import { Appetizers } from "../../pages/Categoris/Category/Appetizers/Appetizers";
import { Seafood } from "../../pages/Categoris/Category/Seafood/Seafood";
import { All } from "./Category/All/All";

export const Categoris = () => {
  return (
    <>
      <Panel title="Category" icon={<BiCategory />} />

      <Category />

      <Routes>
        <Route path="/" element={<Navigate to="all" />} />
        <Route path="/all" element={<All />} />
        <Route path="/fast-food" element={<FastFood />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/national-dishes" element={<NationalDishes />} />
        <Route path="/salad" element={<Salad />} />
        <Route path="/appetizers" element={<Appetizers />} />
        <Route path="/seafood" element={<Seafood />} />
      </Routes>
    </>
  );
};
