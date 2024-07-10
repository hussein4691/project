import React from 'react';
import '../page/Dashboard.css'; // Import your CSS file for styling
import Sidebar from '../components/Sidebar';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Sidebar className="sidebar" />
            <div className="dashboard">
                <header className="header">
                    <h2>ONLINE SCHOOL FINDER</h2>
                </header>
                <div className="main-content">
                    <AboutUs />
                    <ContactUs />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
