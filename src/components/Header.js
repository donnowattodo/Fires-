import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <h1>
        <Link to="/">🔥</Link>
      </h1>
      <h3>🔥만 있는 사람?</h3>
    </div>
  );
}
export default Header;
