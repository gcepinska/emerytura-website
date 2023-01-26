import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Emerytury 365</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              O mnie
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              <span>Blog</span>
              <p className={classes.arrow}>&#2296;</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
      <a className={classes.btn}>Darmowa Konsultacja</a>
    </header>
  );
};

export default Navigation;
