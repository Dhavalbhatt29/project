import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="conta">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSvOghFxBzGHjxjIonjCPkueCl7JGW32gOg&s"
              width="200px"
              height="100px"
              alt="logo"
              className="logo"
            />
          </Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            {/* <li><Link to="/login">UserLogin</Link></li> */}
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/admin">Admin</Link></li>  
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
