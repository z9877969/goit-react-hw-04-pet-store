import React from "react";
import { NavLink } from "react-router-dom";
import style from "./nav.module.css";

const Nav = () => (
  <div className={style.container}>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName={style.activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets" activeClassName={style.activeStyle}>
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName={style.activeStyle}>
          About
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
