import React from 'react';
import { Link } from 'react-router-dom';
// import LoginForm from './LoginForm';

class Register extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Handle registration logic here
    console.log('Registration form submitted:', this.state);
  }

  render() {
    return (
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/" className='register'>Login here</Link></p>
      </div>
    );
  }
}

export default Register;
