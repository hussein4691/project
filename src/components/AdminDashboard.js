import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const API_URL = 'http://localhost:8080/api/v1/Students'; // Adjust the URL as necessary

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-student`);
      console.log('Fetched students:', response.data);
      setStudents(response.data);
    } catch (error) {
      console.error('There was an error fetching the students!', error);
    }
  };

  const handleAdd = async () => {
    try {
      const newStudent = prompt('Add student info (name,gender,age,email):');
      if (newStudent) {
        const [studName, gender, age, email] = newStudent.split(',');
        await axios.post(`${API_URL}/register-student`, { studName, gender, age, email });
        loadStudents(); // Refresh student list after successful add
      }
    } catch (error) {
      console.error('There was an error adding the student!', error);
    }
  };

  const handleUpdate = async (index) => {
    try {
      const updatedStudent = prompt('Update student info (name,gender,age,email):', `${students[index].studName},${students[index].gender},${students[index].age},${students[index].email}`);
      if (updatedStudent) {
        const [studName, gender, age, email] = updatedStudent.split(',');
        await axios.put(`${API_URL}/${students[index].studId}`, { studName, gender, age, email });
        loadStudents(); // Refresh student list after successful update
      }
    } catch (error) {
      console.error('There was an error updating the student!', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      loadStudents(); // Refresh student list after successful delete
    } catch (error) {
      console.error('There was an error deleting the student!', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button onClick={handleAdd}>Add Student</button>
      <table>
        <thead>
          <tr>
            <th>StuName</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.studId}>
              <td>{student.studName}</td>
              <td>{student.gender}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handleUpdate(index)}>Update</button>
                <button onClick={() => handleDelete(student.studId)} className="del">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
