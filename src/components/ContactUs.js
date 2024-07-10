import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact-us">
            <h3>Contact Us</h3>
            <p>If you have any questions or need further assistance, feel free to reach out to us:</p>
            <ul>
                <li>Email: support@onlineschoolfinder.com</li>
                <li>Phone: +255 688754691</li>
                <li>Address: Tunguu-Zanzibar</li>
            </ul>
            <form className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;
