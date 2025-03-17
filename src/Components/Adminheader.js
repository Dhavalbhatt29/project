import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="custom-navbar">
      <div className="container">
        <Link className="logo" to="/">
          Navbar
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/link">
                Link
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button className="dropdown-toggle">
                Dropdown
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/action">
                  Action
                </Link>
                <Link className="dropdown-item" to="/another-action">
                  Another action
                </Link>
                <hr />
                <Link className="dropdown-item" to="/something-else">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#" aria-disabled="true">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="search-form">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
