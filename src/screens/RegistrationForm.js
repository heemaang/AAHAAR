import React, { useState } from "react";
import "../screens/RegistrationForm.css";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contactInfo: "",
    telephoneNo: "",
    goals: "",
    AreaPincode: "",
    state: "",
    city: "",
    fullAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // You can redirect or show a success message to the user here
      } else {
        console.error("Form submission failed");
        // Handle error cases
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container">
      <div className="container0">
        <div className="mb-[20px]">
          <div className="text-[65px] font-Poppins-Medium font-[700] mt-[-20px]">
            Aahaar
            <img
              className="absolute h-[65px] w-[70px] ml-[210px] mt-[-70px]"
              alt="Logo"
              src="logo.png"
            />
          </div>
          <div className="text-[16px] font-Poppins-Medium font-[350] mt-[-15px] ml-[50px]">
            an uphaar to all
            </div>
        </div>
        <div className="text-[43px] font-Poppins-Medium font-[700]">
          Join us and Register to be part of our community
        </div>
      </div>
      <div className="container0">
        <div className="input">
          <span className="label" htmlFor="companyName">
            Company Name
          </span>
          <input
            type="text"
            placeholder="Company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
        <div className="input">
          <span className="label" htmlFor="email">
            Email
          </span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
      </div>
      {/* ... Other code ... */}
      <div className="container0">
        <div className="input">
          <span className="label" htmlFor="contactInfo">
            Contact Info
          </span>
          <input
            type="text"
            placeholder="Contact info"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
        <div className="input">
          <span className="label" htmlFor="telephoneNo">
            Telephone No.
          </span>
          <input
            type="text"
            placeholder="Telephone no."
            name="telephoneNo"
            value={formData.telephoneNo}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
      </div>
      {/* ... Other code ... */}
      <div className="container0">
        <div className="input">
          <span className="label" htmlFor="goals">
            Goals
          </span>
          <textarea
            name="goals"
            placeholder="Goals"
            cols="70"
            rows="10"
            value={formData.goals}
            onChange={handleInputChange}
            className="border p-2"
          ></textarea>
        </div>
      </div>
      {/* ... Other code ... */}
      <div className="container0">
        <div className="input">
          <span className="label" htmlFor="AreaPincode">
            Pincode
          </span>
          <input
            type="text"
            placeholder="Pincode"
            name="AreaPincode"
            value={formData.AreaPincode}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
        <div className="input">
          <span className="label" htmlFor="state">
            State
          </span>
          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
      </div>
      {/* ... Other code ... */}
      <div className="container0">
        <div className="input">
          <span className="label" htmlFor="city">
            City
          </span>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
        <div className="input">
          <span className="label" htmlFor="fullAddress">
            Full Address
          </span>
          <input
            type="text"
            placeholder="Full Address"
            name="fullAddress"
            value={formData.fullAddress}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
      </div>
      <div className="container0">
        <div className="input">
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
