

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
          <nav className="nav container">
            <NavLink to="/" className="nav__logo">
            <img src="src/assets/drink.svg" alt="" />
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
                    to="/Browse"
                    className="nav__link"
                  >
                    Browse
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/Cart" className="nav__link nav__cta">
                  <FaShoppingCart />
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/contact" className="nav__link nav__cta">
                   Contact
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/About"
                    className="nav__link"
                  >
                    About Us
                  </NavLink>
                  
                </li>
              </ul>
            </div>
          </nav>
        </header>
      );
     };
export default Header;