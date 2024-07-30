import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiArrowRightSLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";

export const All = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section>
      <div className="container">
        <div className="category__cart">
          {products.map((product) => (
            <CardActionArea key={product.id} className="category__wrapper-animation">
              <div className="category__wrapper">
                <img src={product.category.img} alt={product.category.name} />
                <div className="category__info">
                  <h3>{product.category.name}</h3>
                  <p>Pleasant appetite</p>
                </div>
                <RiArrowRightSLine className="category__icon" />
              </div>
            </CardActionArea>
          ))}
        </div>
      </div>
    </section>
  );
};
