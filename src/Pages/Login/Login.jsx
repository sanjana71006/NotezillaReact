import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Button from '../../components/Button/Button';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2>Welcome Back!</h2>
        <p>Log in to continue to Notezilla</p>
        <form className="auth-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <Button isPrimary={true} type="submit">Login</Button>
        </form>
        <p className="auth-link-text">
          Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;