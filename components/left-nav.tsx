import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLeftNavStateStore from '../store/left-nav';
import { useRouter } from 'next/router';
import useAuthStore from '../store/user-auth';

const LeftNav = () => {
  const { showNav, setShowNav } = useLeftNavStateStore();
  const { authenticatedUser, setAuthenticatedUser } = useAuthStore();
  const navRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowNav]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        left: showNav ? '0' : '-170px',
        top: '0',
        height: '100vh',
        width: '170px',
        transition: 'left 0.3s ease-in-out',
        backgroundColor: 'white',
        boxShadow: '1px 1px 2px grey',
        zIndex: 2
      }}
    >
      <ul className='vh-100' style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        <li style={{ marginTop: '60px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => { router.push(`/home?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true }), setShowNav(false), scrollToTop() }}>Home</li>
        <li style={{ marginTop: '40px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => { router.push(`/profile?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true }), setShowNav(false) }}>Profile</li>
        <li style={{ marginTop: '40px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => { router.push(`/shoppingCart?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true }), setShowNav(false) }}>Shopping Cart</li>
        <li style={{ marginTop: '40px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => { router.push(`/myMerchant?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true }), setShowNav(false) }}>MyMerchant</li>
        <li style={{ marginTop: '40px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => router.replace('/')}>Log out</li>
      </ul>
    </nav>
  );
};

export default LeftNav;
