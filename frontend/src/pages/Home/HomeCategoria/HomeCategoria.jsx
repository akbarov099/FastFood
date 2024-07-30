import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const HomeCategoria = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="categoria">
      <div className="container">
        <div className="categoria__titles">
          <h2>Category</h2>
          <Link to="/categories" className="categoria__view">
            View All <FaArrowRight />
          </Link>
        </div>
        <ul className="categoria__wrapper">
          {products.map(product => (
            <li className="categoria__item" key={product.id}>
              <img
                src={product.category.img}
                alt={product.category.name}
              />
              <h3>{product.category.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
