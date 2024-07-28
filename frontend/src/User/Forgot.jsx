import React, { useState, useRef } from "react";
import FotoUp from "../assets/images/sign_up_foto.svg";
import FotoTop from "../assets/images/sign_top_foto.svg";

export const Forgot = () => {
  const [code, setCode] = useState(["", "", "", "-", "", "", ""]);
  const [error, setError] = useState(false);
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index === 2) {
        inputs.current[index + 2].focus();
      } else if (index < 6) {
        inputs.current[index + 1].focus();
      }
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }

    setError(false); // Reset error on change
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (code[index] === "" && index > 0) {
        if (index === 4) {
          inputs.current[index - 2].focus();
        } else {
          inputs.current[index - 1].focus();
        }
      }
    }
  };

  const handleSubmit = () => {
    if (code.includes("")) {
      setError(true);
      return;
    }
    // Add your submit logic here
  };

  return (
    <section className="forgot">
      <img className="forgot_foto_up" src={FotoUp} alt="Foto Up" />
      <img className="forgot_foto_top" src={FotoTop} alt="Foto Top" />
      <div className="container">
        <div className="forgot__wrapper">
          <div className="input-wrapper">
            {code.map((digit, index) =>
              index === 3 ? (
                <span key={index} className="separator">
                  {digit}
                </span>
              ) : (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                  className={`input-block ${
                    error && code[index] === "" ? "error" : ""
                  }`}
                />
              )
            )}
          </div>
          <h2>Enter the code in your SMS</h2>
        </div>
      </div>
    </section>
  );
};
