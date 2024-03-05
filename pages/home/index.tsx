import React, { useEffect, useState } from 'react';
import LeftNav from '../../components/left-nav';
import TopNav1 from '../../components/top-nav1';
import TopNav2 from '../../components/top-nav2';
import axios from 'axios';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagePath, setImagePath] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const imageArray = ['pic0.jpg', 'pic1.jpg', 'pic2.jpg'];

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from the server
        const response = await axios.get(`/api/homeImages?index=${currentImageIndex}`);
        setImagePath(`/${response.data.imagePath}`);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [currentImageIndex]); // Trigger the effect when currentImageIndex changes

  useEffect(() => {
    // Start an interval to change the currentImageIndex
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []); // Trigger this effect only once on component mount

  if (isLoading) {
    return <div>Loading...</div>;
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
        </div>
      </div>
    </div>
  );
};

export default Home;
