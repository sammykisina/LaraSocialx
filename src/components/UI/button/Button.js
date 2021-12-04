import React from "react";
import "./Button.css";

function Button({ btnLabel, css, href }) {
  return (
    <a href={href} className={`btn ${css}`}>
      {btnLabel}
    </a>
  );
}

export default Button;
