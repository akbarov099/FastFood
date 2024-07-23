import React from "react";
import { NavLink } from "react-router-dom";

export const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <nav className="category__wrapper">
          <NavLink to="/categories/all" className="category__button">All</NavLink>
          <NavLink to="/categories/fast-food" className="category__button">Fast food</NavLink>
          <NavLink to="/categories/drinks" className="category__button">Drinks</NavLink>
          <NavLink to="/categories/desserts" className="category__button">Desserts</NavLink>
          <NavLink to="/categories/national-dishes" className="category__button">National Dishes</NavLink>
          <NavLink to="/categories/salad" className="category__button">Salad</NavLink>
          <NavLink to="/categories/appetizers" className="category__button">Appetizers</NavLink>
          <NavLink to="/categories/seafood" className="category__button">Seafood</NavLink>
        </nav>
      </div>
    </section>
  );
};
