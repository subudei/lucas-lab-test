import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <Link className="navbar__link" to="/">
        Logout
      </Link>
      <Link className="navbar__link" to="/page1">
        Page 1
      </Link>
      <Link className="navbar__link" to="/page2">
        Page 2
      </Link>
      <Link className="navbar__link" to="/page3">
        Page 3
      </Link>
    </div>
  );
};

export default Navbar;
