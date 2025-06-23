import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    city: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/user", formData);
      alert(res.data.data.message);
      navigate("/"); 
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "450px", width: "100%" }}>
        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullname"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="Enter your city"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              className="form-control"
              placeholder="Re-enter password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Sign Up
          </button>

          <div className="text-center mt-3">
            <small>
              Already have an account? <a href="/login">Login</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
