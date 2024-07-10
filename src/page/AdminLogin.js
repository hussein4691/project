// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import LoginForm from './LoginForm';


const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === 'mkombe@react.com' && password === '123') {
            // alert('Login successful');
            navigate('/Dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>
            <div>
            <p>Register here!</p><Link to='/Register' className='register'>Register</Link></div>
        </div>
    );
};

export default LoginForm;
