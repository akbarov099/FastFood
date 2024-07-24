import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import { User } from "./User/User";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <User />
    </BrowserRouter>
  </React.StrictMode>
);
