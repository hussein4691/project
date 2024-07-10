// // src/App.js
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import LoginForm from './page/LoginForm';
// import Register from './page/Register';
// import Dashboard from './page/Dashboard';
// import Setting from './page/setting';
// import SearchPage from './page/search';
// import AddSchoolForm from './page/School list';




// function App() {
//     return (

//       <Router>
//         <Routes>
//           <Route path='/' element={<LoginForm/>}></Route>
//           <Route path='/Register' element={<Register/>}></Route>
//          <Route path="/Dashboard" element={<Dashboard />} />
//          <Route path="/Setting" element={<Setting />} />
//          <Route path="/SearchPage" element={<SearchPage />} />
//          <Route path="/AddSchoolForm" element={<AddSchoolForm/>} />


//         </Routes>
//       </Router>  

//     );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './page/LoginForm';
import Register from './page/Register';
import Dashboard from './page/Dashboard';
import Setting from './page/setting';
import AddSchoolForm from './page/School list';
import SchoolList from './components/SchoolList';
import RegisterForm from './components/RegisterForm';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (index, updatedUser) => {
    const updatedUsers = users.map((user, i) => (i === index ? updatedUser : user));
    setUsers(updatedUsers);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/AddS" element={<AddSchoolForm />} />
        <Route path="/schools" element={<SchoolList />} />
        <Route path="/register/:schoolId" element={<RegisterForm addUser={addUser} />} />
        <Route path="/admin" element={<AdminDashboard users={users} updateUser={updateUser} deleteUser={deleteUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
