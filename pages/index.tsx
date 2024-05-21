import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuthStore from '../store/user-auth';
import { useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const { authenticated, authenticatedUser, setAuthenticated, setAuthenticatedUser } = useAuthStore();

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
        setAuthenticated(true);
        setAuthenticatedUser(username);
  
        // Clear form fields
        setPassword('');
        setErrorMessage('');
        setLoading(false);
  
        router.push(`/home?user=${encodeURIComponent(username)}`, undefined, { shallow: true });
      } else {
        setErrorMessage('Unexpected error occurred. Please try again.');
        setLoading(false);
        setSubmitted(false);
      }
    } catch (error) {
      console.error('Login error:', error);
  
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid username or password. Please try again.');
        setPassword('');
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

  return(
    <div className='d-flex flex-column vh-100 align-items-center justify-content-center'>
      <title>Login</title>
      <div style={{border: '1px lightGrey', padding: '80px 60px', boxShadow: '5px 2px 30px lightGrey'}}>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div style={{marginTop: '40px'}}>
      <h5>Username</h5>
      <input
        type="text"
        autoComplete='off'
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='mb-1'
        disabled={submitted || loading}
        onKeyPress={handleKeyPress}
        placeholder='Username'
        maxLength={25}
        style={{width: '300px', padding: '5px', border: 'solid 1px lightGrey', borderRadius: '5px'}}
      />
      </div>
      <div>
      <h5 style={{marginTop: '10px'}}>Password</h5>
      <input
        type="password"
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mb-3'
        disabled={submitted || loading}
        onKeyPress={handleKeyPress}
        placeholder='Password'
        maxLength={25}
        style={{width: '300px', padding: '5px', border: 'solid 1px lightGrey', borderRadius: '5px'}}
      />
      </div>
      <button id='submit' type="button" onClick={handleLogin} className='mb-3' disabled={submitted || loading} style={{marginTop: '40px', backgroundColor: '#800020', padding: '10px 100px', border: 'solid 1px white', color: 'white', borderRadius: '5px', display: 'block', margin: 'auto'}}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <a onClick={toRegister} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ cursor: "pointer", textDecoration: isHovered ? "underline" : "none", display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        Don't have an account? Register here
      </a>
    </div>
    </div>
  );
};

export default Login;
