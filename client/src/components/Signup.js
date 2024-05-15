import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    userName: '',
    password: '',
    confirmPassword: '',
    country: '',
    fullAddress: '',
    //profilePhoto: null
  });

  const { name, email, mobileNo, userName, password, confirmPassword, country, fullAddress } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    // Send form data to backend for signup
    try {
      const res = await axios.post('http://localhost:3001/api/auth/signup', formData);
      console.log(res.data);
      // Redirect to login page after successful signup
      // You can use react-router-dom's useHistory hook for redirection
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="text" name="mobileNo" value={mobileNo} onChange={onChange} placeholder="Mobile No" />
        <input type="text" name="userName" value={userName} onChange={onChange} placeholder="Username" required />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} placeholder="Confirm Password" required />
        <input type="text" name="country" value={country} onChange={onChange} placeholder="Country" />
        <input type="text" name="fullAddress" value={fullAddress} onChange={onChange} placeholder="Full Address" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
