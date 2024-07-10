import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './SchoolList.css';

const API_URL = 'http://localhost:8080/api/v1/school';

const SchoolList = () => {
  const [schools, setSchools] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [school, setSchool] = useState({ id: null, schoolName: '', address: '', email: '', descriptions: '' });

  useEffect(() => {
    getAllSchools();
  }, []);

  const getAllSchools = () => {
    axios.get(`${API_URL}/get-school`)
      .then(response => {
        setSchools(response.data);
      })
      .catch(error => {
        console.error('Error fetching schools:', error);
      });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSchool({ id: null, schoolName: '', address: '', email: '', descriptions: '' }); // Clear input fields
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchool({ ...school, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (school.id) {
      // Update existing school
      axios.put(`${API_URL}/${school.id}`, school)
        .then(response => {
          const updatedSchools = schools.map(s => s.id === school.id ? response.data : s);
          setSchools(updatedSchools);
          closeModal();
        })
        .catch(error => {
          console.error('Error updating school:', error);
        });
    } else {
      // Add new school
      axios.post(API_URL, school)
        .then(response => {
          setSchools([...schools, response.data]);
          closeModal();
        })
        .catch(error => {
          console.error('Error adding school:', error);
        });
    }
  };

  const handleEdit = (school) => {
    setSchool(school);
    setModalIsOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setSchools(schools.filter(s => s.id !== id));
      })
      .catch(error => {
        console.error('Error deleting school:', error);
      });
  };

  return (
    <div className="school-list">
      <h1>School List</h1>
      <div className="school-cards">
        {schools.map(school => (
          <div key={school.id} className="school-card">
            <h2>{school.schoolName}</h2>
            <p>{school.address}</p>
            <p>{school.email}</p>
            <div className="school-actions">
              <button onClick={() => handleEdit(school)} className="btn btn-primary">Edit</button>
              <button onClick={() => handleDelete(school.id)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={openModal} className="btn btn-primary">Add School</button>
      <ModalComponent
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        school={school}
      />
    </div>
  );
};

const ModalComponent = ({ modalIsOpen, closeModal, handleSubmit, handleChange, school }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
      contentLabel="Add School Modal"
    >
      <h2>{school.id ? 'Edit School' : 'Add School'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>School Name:</label>
          <input type="text" name="schoolName" value={school.schoolName} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={school.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={school.email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">{school.id ? 'Update School' : 'Add School'}</button>
      </form>
      <button onClick={closeModal} className="btn btn-secondary">Close</button>
    </Modal>
  );
};

export default SchoolList;
