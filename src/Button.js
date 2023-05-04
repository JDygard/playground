import React from "react";
import "./Button.css";

const Button = ({ ...other }) => {
  return (
    <button {...other} style={{ ...other.style, position: "relative", overflow: "hidden"}}>
      {other.children}
    </button>
  );
};

export default Button;
