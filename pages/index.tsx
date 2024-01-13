// Login.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const toRegister = () => {
    router.push('/register');
  };

  const handleLogin = async () => {
    setSubmitted(true);
    setLoading(true);

    try {
      const response = await axios.post('/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Assuming the login was successful, set some authentication state
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('authenticatedUser', username);

        // Clear form fields and navigate to the home page
        setUsername('');
        setPassword('');
        setErrorMessage('');
        setLoading(false);
        router.push(`/home?user=${encodeURIComponent(username)}`);
      } else {
        setErrorMessage('Unexpected error occurred. Please try again.');
        setLoading(false);
        setSubmitted(false);
      }
    } catch (error) {
      console.error('Login error:', error);

      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid username or password. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }

      setLoading(false);
      setSubmitted(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <div className='d-flex flex-column vh-100 align-items-center justify-content-center'>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='mb-1'
        disabled={submitted || loading}
        onKeyPress={handleKeyPress}
        placeholder='Username'
        maxLength={25}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mb-3'
        disabled={submitted || loading}
        onKeyPress={handleKeyPress}
        placeholder='Password'
        maxLength={25}
      />
      <button type="button" onClick={handleLogin} className='mb-3' disabled={submitted || loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <a onClick={toRegister} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ cursor: "pointer", textDecoration: isHovered ? "underline" : "none" }}>
        Don't have an account? Register here
      </a>
    </div>
  );
};

export default Login;
