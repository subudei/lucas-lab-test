import React from "react";
import "./Navbar.css";

import { logout } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar__container">
      <Link className="navbar__link" to="/">
        <button onClick={() => dispatch(logout())}>Logout</button>
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
