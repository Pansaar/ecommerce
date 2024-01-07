import React, { useState } from 'react';
import router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'Username') {
        setUsername(value);
      } else if (name === 'Password') {
        setPassword(value);
      } else {
      alert('Invalid Username or Password');
    }
  };
  

  const handleSave = async () => {
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
      // Prevent the default form submission behavior
      e.preventDefault();
      // Call the handleSave function when Enter is pressed
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
          value={username}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={submitted}
        />
      </div>
      <div className='text-center mb-3'>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={submitted}
        />
      </div>
      <div className='text-center mb-3'>
        <button onClick={handleSave}>Sign Up</button>
      </div>
      <div className='text-center' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{cursor:"pointer", textDecoration: isHovered ? "underline": "none"}}>
      </div>
    </div>
  );
}    

export default Index;
