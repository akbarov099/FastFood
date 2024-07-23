import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const HomeCategoria = () => {
  return (
    <section className="categoria">
      <div className="container">
        <div className="categoria__titles">
          <h2>Сategory</h2>
          <Link to="/categories" className="categoria__view">
              View All <FaArrowRight />
          </Link>
        </div>
        <ul className="categoria__wrapper">
          <li className="categoria__item">
            <img
              src="https://cdn2.activebeat.com/eyJidWNrZXQiOiJvbS1wdWItc3RvcmFnZSIsImtleSI6ImFjdGl2ZWJlYXQvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDkvQ2hlZXNlYnVyZ2VyLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9fX0="
              alt=""
            />
            <h3>Burgers</h3>
          </li>

          <li className="categoria__item">
            <img
              src="https://avatars.mds.yandex.net/i?id=81db2b6274d91f79d0379db8cde0e06ec5142921-7555196-images-thumbs&n=13"
              alt=""
            />
            <h3>Pizza</h3>
          </li>

          <li className="categoria__item">
            <img
              src="https://avatars.mds.yandex.net/i?id=6c7949f4b4ae5b001d2c91ea9886bf15168c74a8-11271031-images-thumbs&n=13"
              alt=""
            />
            <h3>Sandwiches</h3>
          </li>

          <li className="categoria__item">
            <img
              src="https://avatars.mds.yandex.net/i?id=8b47da30ea83813ab05979495f933d6626818a4a7ef4acf8-5142520-images-thumbs&n=13"
              alt=""
            />
            <h3>Hot Dogs</h3>
          </li>

          <li className="categoria__item">
            <img
              src="https://supremepizzaonline.ca/wp-content/uploads/2017/08/Tandoori-Wings-update.png"
              alt=""
            />
            <h3>Chicken</h3>
          </li>

          <li className="categoria__item">
            <img
              src="https://i.pinimg.com/originals/4f/10/02/4f1002a574dd26701fbe15d1d1fba145.jpg"
              alt=""
            />
            <h3>Snacks</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
