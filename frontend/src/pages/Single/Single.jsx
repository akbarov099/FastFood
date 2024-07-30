import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Single() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/products/${id}/`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <>
      <section>
        <div className="single__panel">
          <FaArrowLeftLong
            className="single__panel-icon"
            onClick={() => navigate(-1)}
          />
        </div>
        <ul className="single">
          <div className="container">
            <li>
              <img src={product.category.img} alt={product.category.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="btns">
                <button>Ingredients</button>
                <button>
                  Order <span>${product.price}</span>
                </button>
              </div>
            </li>
          </div>
        </ul>
      </section>
    </>
  );
}
