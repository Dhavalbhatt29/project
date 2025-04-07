import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import LoginModal from "./Login";
import SignupModal from "./Signup";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Slice/Authslice";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(logout());
  };

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://img.freepik.com/premium-photo/blue-purple-wave-that-is-white-background_1309810-40680.jpg"
            width="150px"
            height="80px"
            alt="logo"
          />
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {auth ? (
              <Link to="#" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="#" onClick={() => openModal("login")}>
                Login
              </Link>
            )}
          </li>

          <li>
            <Link to="#" onClick={() => openModal("signup")}>
              Signup
            </Link>
          </li>
        </ul>
      </div>

      {/* Modals */}
      {modalType === "login" && <LoginModal closeModal={closeModal} />}
      {modalType === "signup" && <SignupModal closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;
