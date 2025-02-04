import React, { useState } from "react";
import "../App.css";

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      alert("Login Successful");
      console.log("Login data", formData);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="container-fluid bgcolor">
      <div className="container">
        <h1 className="title">Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type={key === "password" ? "password" : "text"}
                id={key}
                name={key}
                className={`form-control ${errors[key] ? "error-border" : ""}`}
                value={formData[key]}
                onChange={handleChange}
              />
              {errors[key] && <span className="error-text">{errors[key]}</span>}
            </div>
          ))}
          <button type="submit" className="submit-button border-rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
