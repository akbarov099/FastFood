import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "./assets/scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import { User } from "./User/User";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <User />
    </BrowserRouter>
  </React.StrictMode>
);
