import React, { useEffect, useState } from 'react';
import LeftNav from '../../components/left-nav';
import TopNav1 from '../../components/top-nav1';
import TopNav2 from '../../components/top-nav2';
import axios from 'axios';
import { imageArray } from '../api/homeImages';
import { imageList } from '../api/homeImages';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagePath, setImagePath] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/homeImages?index=${currentImageIndex}`);
        setImagePath(`/${response.data.imagePath}`);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function toLeftImage() {
    if (currentImageIndex !== 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1) % imageArray.length);
    } else if (currentImageIndex === 0) {
      setCurrentImageIndex(imageArray.length-1);
    }
  }

  function toRightImage() {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <title>Homepage</title>
      <LeftNav />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopNav1 />
        <TopNav2 />
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
          {imagePath && (
            <img
              src={imagePath}
              style={{ maxWidth: '100%', height: '900px', boxShadow: '1px 1px 2px grey' }}
              alt="Image"
            />
          )}
          <svg xmlns="http://www.w3.org/2000/svg" id='leftArrow' viewBox="0 0 512 512" fill='lightGrey' width={80} style={{position: 'absolute', marginRight: '90%', marginBottom: '20%'}} onMouseEnter={() => document.getElementById('leftArrow').style.fill = 'black'} onMouseLeave={() => document.getElementById('leftArrow').style.fill = 'lightGrey'} onClick={toLeftImage}><path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" id ='rightArrow' viewBox="0 0 512 512" fill='lightGrey' width={80} style={{position: 'absolute', marginLeft: '90%', marginBottom: '20%'}} onMouseEnter={() => document.getElementById('rightArrow').style.fill = 'black'} onMouseLeave={() => document.getElementById('rightArrow').style.fill = 'lightGrey'} onClick={toRightImage}><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"/></svg>          
          <div>
            {imageList.map((image, index) => (
              <img key={index} src={image} style={{maxWidth: '25%', padding: '50px 10px 20px 10px'}}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
