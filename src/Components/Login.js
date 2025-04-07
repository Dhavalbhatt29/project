import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../Redux/Slice/Toastslice";
import { setUser } from "../Redux/Slice/Slice";

const LoginModal = ({ closeModal }) => {
  const auth = useSelector((state) => state.auth.auth);
  const [formData, setFormData] = useState({
    email: "easyskill1234@gmail.com",
    password: "easyskill1234",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      if (res.data.status) {
        localStorage.setItem("token", res.data.data.token);
        // navigate("/admin");
        closeModal();
        dispatch(setUser(res.data.data.data));
        dispatch(showToast({ message: "Login Successfull", type: "success" }));
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div
      className="modal show"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h1 className="title">Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button border-rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
