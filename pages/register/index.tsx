import React, { useState } from 'react';
import router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import useRegErrorStore from '../../store/reg-error';
import UseRegError from '../../components/reg-error';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);

  const { isVisible, setShowError, message, setMessage } = useRegErrorStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'Username') {
        setUsername(value);
      } else if (name === 'Password') {
        setPassword(value);
      } else if (name === 'confirmPassword') {
        setConfirmPassword(value)
      } else {
      alert('onChange Error');
    }
  };

  const handleSave = async () => {
    setLoading(true)
    if (username.length < 8 || password.length < 8) {
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setLoading(false)
      setShowError(true)
      setMessage("Username and password should be at least 8 characters long")
      return;
    }
  
    if (password !== confirmPassword) {
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setLoading(false)
      setShowError(true)
      setMessage("Invalid password confirmation")
      return;
    }
    setSubmitted(true)
    try {
      const response = await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log('Post saved successfully');
        router.push('/');
      } else {
        console.error('Failed to save post');
        setUsername("")
        setPassword("")
      }
    } catch (error) {
      console.error('Error while saving post', error);
      setUsername("")
      setPassword("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();

    }
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <div className='text-center mb-1'>
        <h2 className='mb-3'>Register</h2>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          autoComplete='disable'
          value={username}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={submitted}
          maxLength={25}
        />
      </div>
      <div className='text-center mb-1'>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={submitted || loading}
          maxLength={25}
        />
      </div>
      <div className='text-center mb-3'>
        <input 
          type='password'
          name="confirmPassword"
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={submitted || loading}
          maxLength={25}
        />
      </div>
      <div className='text-center mb-3'>
        <button onClick={handleSave}>{loading ? "Signing Up..." : "Sign Up"}</button>
      </div>
        <UseRegError />
    </div>
  );
}    

export default Index;
