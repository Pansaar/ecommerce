import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LeftNav from '../../components/left-nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from "../../components/top-nav";

const Home = () => {
  const router = useRouter();
  const { user } = router.query;

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (user !== authenticatedUser) {
      router.replace(`/home?user=${encodeURIComponent(authenticatedUser)}`);
    }
  }, [user]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <LeftNav />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopNav />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <img
              src='/armani.jpg'
              alt="Armani"
              style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', boxShadow: '1px 1px 2px grey' }}
            />
          </div>
          </div>
        <div style={{width: "100%", paddingTop: "20px", boxShadow: "1px 1px 2px grey", backgroundColor: "white"}}>
          <h5 style={{marginLeft: "10px", marginBottom: "20px"}}>Recommended Electronics</h5>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className='vh-100' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
            <img
              src='/iphone.jpg'
              alt="iPhone"
              style={{ maxWidth: '150px', maxHeight: '23%', width: 'auto', height: 'auto', boxShadow: '1px 1px 2px grey' }}
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
