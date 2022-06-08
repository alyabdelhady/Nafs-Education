import React from "react";
import "./Header.css";

function Header({ title }) {
  return (
    <div className=" country d-flex align-items-center justify-content-around">
      <h6>{title}</h6>
      <span></span>
    </div>
  );
}

export default Header;
