

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
          <nav className="nav container">
          <img src="src/assets/drink.svg" alt="" />
            <NavLink to="/" className="nav__logo">
            </NavLink>
     
            <div
              className={"nav__menu"}
              id="nav-menu"
            >
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink to="/" className="nav__link">
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/about-us"
                    className="nav__link"
                  >
                    Browse
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/favorite"
                    className="nav__link"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/get-started" className="nav__link nav__cta">
                   Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      );
     };
export default Header;