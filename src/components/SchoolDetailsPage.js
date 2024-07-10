import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/school';

const SchoolService = {
  getSchoolById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },
  registerStudent: (schoolId, student) => {
    return axios.post(`${API_URL}/${schoolId}/register-student`, student);
  }
};

const SchoolDetailsPage = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);
  const [student, setStudent] = useState({
    studName: '',
    gender: '',
    age: '',
    email: ''
  });

  useEffect(() => {
    SchoolService.getSchoolById(id).then(response => {
      setSchool(response.data);
    }).catch(error => {
      console.error('There was an error fetching the school details!', error);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await SchoolService.registerStudent(id, student);
      alert('Student registered successfully');
      // Optionally, redirect or perform any other action after successful registration
    } catch (error) {
      console.error('There was an error registering the student!', error);
    }
  };

  if (!school) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{school.SchoolName}</h1>
      <p>Address: {school.address}</p>
      <p>Email: {school.email}</p>
      <p>Descriptions: {school.descriptions}</p>

      <h2>Register as a Student</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input type="text" name="studName" value={student.studName} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={student.gender} onChange={handleChange} required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={student.age} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SchoolDetailsPage;
