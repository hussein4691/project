import axios from 'axios'; // Add this import statement

const API_URL = 'http://localhost:8080/api/v1/user';

const UserService = {
  getAllUsers: () => {
    return axios.get(`${API_URL}/get-users`);
  },
  addUser: (user) => {
    return axios.post(API_URL, user);
  },
  updateUser: (id, user) => {
    return axios.put(`${API_URL}/${id}`, user);
  },
  deleteUser: (id) => {
    return axios.delete(`${API_URL}/${id}`);
  }
};

export default UserService;
