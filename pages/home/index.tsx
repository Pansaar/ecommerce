import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LeftNav from '../../components/left-nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../../components/top-nav';
import useAuthStore from '../../store/user-auth';

const Home = () => {
  const router = useRouter();
  const { user } = router.query;

  const imageArray = ['pic0', 'pic1', 'pic2'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoverRight, setHoverRight] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [changingSlide, setChangingSlide] = useState(false);

  const { authenticatedUser, authenticated,setAuthenticated, setAuthenticatedUser } = useAuthStore();


  useEffect(() => {
    if (user !== authenticatedUser) {
      router.replace(`/home?user=${encodeURIComponent(authenticatedUser)}`);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (user !== authenticatedUser) {
        router.replace(`/home?user=${encodeURIComponent(authenticatedUser)}`);
      }
      if (!changingSlide) {
        setChangingSlide(true);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        setTimeout(() => {
        setChangingSlide(false);
        }, 5000);
      } 
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, [changingSlide, imageArray.length]);

  const handleLeftClick = () => {
    if (hoverLeft) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
    }
  };

  const handleRightClick = () => {
    if (hoverRight) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <LeftNav />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopNav />
        <div
          style={{
            flex: 1,
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ backgroundColor: 'white', position: 'relative' }}>
            <img
              src={`/${imageArray[currentImageIndex]}.jpg`}
              style={{ maxWidth: '100%', maxHeight: '100%', boxShadow: '1px 1px 2px grey' }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={50}
              fill="grey"
              style={{
                fill: hoverLeft ? 'white' : 'grey',
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
              onClick={handleLeftClick}
            >
              <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/></svg>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={50}
              fill="grey"
              style={{
                fill: hoverRight ? 'white' : 'grey',
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
              onClick={handleRightClick}
            >
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z" />
            </svg>
          </div>
        </div>
        <div style={{width: "100%", paddingTop: "20px", boxShadow: "1px 1px 2px grey", backgroundColor: "white"}}>
          <h5 style={{marginLeft: "10px", marginBottom: "20px"}}>Recommended</h5>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginBottom: '30px' }}>
            <img
              src='/iphone.jpg'
              alt="iPhone"
              style={{ maxWidth: '23%', maxHeight: '23%', width: 'auto', height: 'auto', boxShadow: '1px 1px 2px grey' }}
            />
            <img
              src='/thinkpad.jpg'
              alt="ThinkPad"
              style={{ maxWidth: '23%', maxHeight: '23%', width: 'auto', height: 'auto', boxShadow: '1px 1px 2px grey' }}
            />
            <img
              src='/sennheiser.jpg'
              alt="Sennheiser"
              style={{ maxWidth: '23%', maxHeight: '23%', width: 'auto', height: 'auto', boxShadow: '1px 1px 2px grey' }}
            />
            <img
              src='/keyboard.jpg'
              alt="Keyboard"
              style={{ maxWidth: '23%', maxHeight: '23%', width: 'auto', height: 'auto', boxShadow: '1px 1px 2px grey' }}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
