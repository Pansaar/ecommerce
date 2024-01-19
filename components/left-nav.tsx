import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLeftNavStateStore from '../store/left-nav';
import { useRouter } from 'next/router';

const LeftNav = () => {
  const { showNav, setShowNav } = useLeftNavStateStore();

  const router = useRouter()

  return (
    <nav style={{
      position: 'fixed',
      left: showNav ? '0' : '-170px',
      top: '0',
      height: '100vh',
      width: '170px',
      transition: 'left 0.3s ease-in-out',
      backgroundColor: 'white',
      boxShadow: '1px 1px 2px grey',
      zIndex: 1
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='grey' width={15} style={{marginLeft: "140", marginTop: "15px", cursor: "pointer"}} onClick={() => setShowNav(false)}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      <ul className='vh-100' style={{ overflowY: 'hidden', listStyle: 'none', margin: '0', padding: '0' }}>
        <li style={{ marginTop: '30px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => router.push('/profile')}>Profile</li>
        <li style={{ marginTop: '30px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => router.push('/shoppingCart')}>Shopping Cart</li>
        <li style={{ marginTop: '30px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => router.push('/myMerchant')}>MyMerchant</li>
        <li style={{ marginTop: '30px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => router.replace('/')}>Log out</li>
      </ul>
    </nav>
  );
};

export default LeftNav;
