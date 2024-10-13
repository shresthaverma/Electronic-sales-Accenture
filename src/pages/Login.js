import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import '../styles.css'; 
const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!'); 
      setIsLoggedIn(true); 
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong'); 
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p> 
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;