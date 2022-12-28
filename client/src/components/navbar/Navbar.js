import React, { useState } from "react";
import "./Navbar.css";
import { links } from "../data";
import logoText from "../../assets/img/logo/logo-text.png";
import { FaBars } from "react-icons/fa";
import { CgCloseR } from "react-icons/cg";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={logoText} alt="HanoiFC" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : " ")}
                  onClick={() => {
                    setIsNavShowing((prev) => !prev);
                  }}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => {
            setIsNavShowing((prev) => !prev);
          }}
        >
          {isNavShowing ? <CgCloseR /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
