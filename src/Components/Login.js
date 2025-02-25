import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../App.css";
import axios from "axios";

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="container-fluid bgcolor">
      <div className="container">
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
  );
};

export default LoginComponent;
