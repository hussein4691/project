import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button className="openbtn" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>
          &times;
        </a>
        <h2>Navigation</h2>
        <ul>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/Schools">School List</Link></li>
          <li><Link to="/Setting">Settings</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
