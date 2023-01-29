import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Emerytury 365</div>
      <nav className={isNavExpanded ? classes["nav-expanded"] : classes.nav}>
        <button
          className={classes.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              O mnie
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              Blog
              {/* <p className={classes.arrow}>&#2296;</p> */}
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
