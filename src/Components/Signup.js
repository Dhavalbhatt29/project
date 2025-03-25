import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const SignupModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Birthdate: "",
    ContactNo: "",
    City: "",
    Gender: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.Name.trim()) newErrors.Name = "Name is required";
    if (!formData.Email.trim()) newErrors.Email = "Email is required";
    if (!formData.Birthdate) newErrors.Birthdate = "Birthdate is required";
    if (!formData.ContactNo.trim())
      newErrors.ContactNo = "Contact number is required";
    if (!formData.City) newErrors.City = "City selection is required";
    if (!formData.Gender) newErrors.Gender = "Gender selection is required";
    if (!formData.Password.trim()) newErrors.Password = "Password is required";
    if (formData.Password !== formData.ConfirmPassword)
      newErrors.ConfirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/today",
          formData
        );
        console.log(res.data.data.data);
        setFormData({
          Name: "",
          Email: "",
          Birthdate: "",
          ContactNo: "",
          City: "",
          Gender: "",
          Password: "",
          ConfirmPassword: "",
        });
        setErrors({});
        closeModal();
      } catch (error) {
        console.error("Signup Error:", error);
      }
    }
  };

  return (
    <div className="modal-backdrop1">
      <div
        className="modal-dialog1 modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content1">
          <span className="close1" onClick={closeModal}>
            &times;
          </span>
          <h1 className="title1">Create an Account</h1>
          <form className="form" onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
              <div className="form-group" key={key}>
                <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</label>
                {key === "City" || key === "Gender" ? (
                  <select
                    id={key}
                    name={key}
                    className={`form-control ${
                      errors[key] ? "error-border" : ""
                    }`}
                    value={formData[key]}
                    onChange={handleChange}
                  >
                    <option value="" label={`Select your ${key}`} />
                    {key === "City" &&
                      ["New York", "London", "Paris", "Tokyo"].map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    {key === "Gender" &&
                      ["Male", "Female", "Other"].map((gender) => (
                        <option key={gender} value={gender}>
                          {gender}
                        </option>
                      ))}
                  </select>
                ) : (
                  <input
                    type={
                      key.includes("Password")
                        ? "password"
                        : key === "Birthdate"
                        ? "date"
                        : "text"
                    }
                    id={key}
                    name={key}
                    className={`form-control ${
                      errors[key] ? "error-border" : ""
                    }`}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                )}
                {errors[key] && (
                  <span className="error-text">{errors[key]}</span>
                )}
              </div>
            ))}
            <button type="submit1" className="submit-button border-rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
