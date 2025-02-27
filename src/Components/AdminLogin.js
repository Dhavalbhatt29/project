import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { login } from "../Redux/Slice";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (token) {
  //     navigate("/admin/dashboard");
  //   }
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    dispatch(login(navigate, formData));
  };

  return (
    <div className="container-fluid bgcolor">
      <div className="container">
        <h1 className="title">Admin Login</h1>
        {error && <p className="error-text">{error}</p>}
        
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

          <button
            type="submit"
            className="submit-button border-rounded"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        
      </div>
    </div>
  );
};

export default AdminLogin;
