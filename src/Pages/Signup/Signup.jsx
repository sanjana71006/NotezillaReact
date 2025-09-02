import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Button from '../../components/Button/Button';
import './Signup.css'; // You can reuse Login.css or create a new one

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2>Join Notezilla</h2>
        <p>Create an account to start sharing and discovering notes.</p>
        <form className="auth-form">
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <Button isPrimary={true} type="submit">Create Account</Button>
        </form>
        <p className="auth-link-text">
          Already have an account? <Link to="/login" className="auth-link">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;