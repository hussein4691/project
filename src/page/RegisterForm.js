import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = ({ addUser }) => {
  const { schoolId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    email: '',
    schoolId: schoolId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h1>Register for School {schoolId}</h1>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
