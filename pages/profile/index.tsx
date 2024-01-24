import React, { useState } from 'react'
import LeftNav from '../../components/left-nav'
import TopNav1 from '../../components/top-nav1'
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuthStore from '../../store/user-auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const index = () => {

  const { authenticatedUser, setAuthenticatedUser, authenticated, setAuthenticated } = useAuthStore();
  const router = useRouter()
  const { user: userParam } = router.query;
  const [showName, setShowName] = useState("")

  useEffect(() => {
    if (userParam === undefined) {
      setAuthenticated(false);
    } else if (userParam !== authenticatedUser) {
      router.push('/');
    }
  }, [userParam, router, authenticatedUser, setAuthenticated, setShowName]);

  return (
    <div>
      <TopNav1 />
      <LeftNav />
      <div className='d-flex' style={{backgroundColor: 'rgb(128, 0, 32)', height: '180px'}}>
      <div className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "130px", height: "130px", borderRadius: "50%", marginLeft: '80px', backgroundColor: 'lightgrey' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={70} fill='white'>
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
      </svg>
    </div>
    <div style={{marginTop: '20px', marginLeft: '20px', fontSize: '20px', color: 'white'}}>
    {userParam !== authenticatedUser ? <h5></h5>: <h5>{userParam}</h5>}
  <p style={{backgroundColor: 'white', borderRadius: '10px', fontSize: '16px', color: 'rgb(128, 0, 32)', padding: '2px 5px 2px 5px', cursor: 'pointer'}}>{'Classic Member >'}</p>
  </div>
</div>
</div>
  )
}

export default index