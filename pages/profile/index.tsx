  import React, { useState } from 'react'
  import LeftNav from '../../components/left-nav'
  import TopNav1 from '../../components/top-nav1'
  import 'bootstrap/dist/css/bootstrap.min.css';
  import useAuthStore from '../../store/user-auth';
  import { useEffect } from 'react';
  import { useRouter } from 'next/router';
  import userProfilePicState from '../../store/profilePic';

  const index = () => {
    
    const { authenticatedUser, setAuthenticatedUser, authenticated, setAuthenticated } = useAuthStore();
    const router = useRouter()
    const { user: userParam } = router.query;
    const {isProfile, setIsProfile} = userProfilePicState()
    const [profilePic, setProfilePic] = useState('');
    console.log(isProfile)
    useEffect(() => {
      if (userParam === undefined) {
        setAuthenticated(false);
      } else if (userParam !== authenticatedUser) {
        router.push('/');
      }
    }, [userParam, router, authenticatedUser, profilePic ]);      

    useEffect(() => {
      const fetchProfilePic = async () => {
        try {
          if (userParam) {
            const response = await fetch(`/api/fetchProfilePic?user=${encodeURIComponent(userParam as string)}`);
            if (response.ok) {
              const data = await response.json();
              setProfilePic(data.profilePic);
              if (data.profilePic !== "") {
                setIsProfile(true);
                console.log(data.username);
              }
            } else {
              console.error('Failed to fetch profile picture');
            }
          }
        } catch (error) {
          console.error('Error fetching profile picture:', error);
        }
      };
  
      fetchProfilePic();
    }, [userParam, setIsProfile]);

    function toEditProfilePic() {
      router.push(`/editProfilePic?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true });
    }

    return (
      <div>
        <title>Profile</title>
        <TopNav1 />
        <LeftNav />
        <div className='d-flex' style={{backgroundColor: 'rgb(128, 0, 32)', height: '180px'}}>
        <div id='profilePic' className='mt-3' onClick={toEditProfilePic} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "130px", height: "130px", borderRadius: "50%", marginLeft: '80px', backgroundColor: 'lightgrey', cursor: 'pointer' }}>
            {isProfile ? <img src={profilePic} id='profileImage' style={{ justifyContent: "center", alignItems: "center", width: "130px", height: "130px", borderRadius: "50%", backgroundColor: 'lightgrey', cursor: 'pointer' }}></img>:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={70} fill='white'>
          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
        </svg>}
      </div>
      <div style={{marginTop: '20px', marginLeft: '20px', fontSize: '20px', color: 'white'}}>
      {userParam !== authenticatedUser ? <h5></h5>: <h5>{userParam}</h5>}
    <p style={{backgroundColor: 'white', borderRadius: '10px', fontSize: '16px', color: 'rgb(128, 0, 32)', padding: '2px 5px 2px 5px', cursor: 'pointer'}}>{'Classic Member >'}</p>
    <p style={{fontSize: '16px', marginTop: '-5px'}}>Followers | Following</p>
    </div>
  </div>
  <div className='vh-100' style={{boxShadow: '1px 1px 5px grey', alignItems: 'flex-start', margin: '30px 30px', borderRadius: '10px'}}>
  <div style={{height: '50px', width: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={30} fill='rgb(173,255,47)' style={{alignSelf: 'center', marginLeft: '10px'}}><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
    <p style={{marginLeft: '10px', marginTop: '15px'}}>6.7 Payday</p>
    <h1 style={{fontSize: '24px', color: 'grey', marginLeft: 'auto', marginRight: '10px', marginTop: '8px'}}>{`>`}</h1>
  </div>
  <div style={{borderTop: 'solid 1px lightgrey', borderBottom: 'solid 1px lightgrey', width: '100%', display: 'flex', flexDirection: 'column', paddingTop: '20px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{marginLeft: '80px'}}>
          <div style={{backgroundColor: 'rgb(128, 0, 32)', marginTop: '10px', padding: '15px', borderRadius: '50%', cursor: 'pointer'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40} fill='white'><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
          </div>
          <p style={{textAlign: 'center', marginTop: '5px'}}>Wallet</p>
        </div>
        <div>
        <div style={{backgroundColor: '#54A88C', marginTop: '10px', padding: '15px', borderRadius: '50%', cursor: 'pointer'}}>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={50} fill='white'><path d="M0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192V128z"/></svg>
          </div>
        </div>
          <p style={{textAlign: 'center', marginTop: '5px'}}>Coupons</p>
        </div>
        <div>
        <div style={{backgroundColor: 'rgb(25, 25, 112)', marginTop: '10px', padding: '15px', borderRadius: '50%', cursor: 'pointer'}}>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={50} fill='white'><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        </div>
        </div>
          <p style={{textAlign: 'center', marginTop: '5px'}}>Delivery</p>
        </div>
      <div>
        <div style={{marginRight: '80px'}}>
          <div style={{backgroundColor: 'rgb(204,204,0)', marginTop: '10px', padding: '15px', borderRadius: '50%', cursor: 'pointer'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={50} fill='white'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
        </div>
        <p style={{textAlign: 'center', marginTop: '5px'}}>Ratings</p>
        </div>
      </div>
      </div>
      </div>
      <div style={{height: '50px', borderBottom: '1px solid lightgrey', width: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={25} fill='rgb(128, 0, 32)' style={{marginTop: '5px', marginLeft: '10px'}}><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/></svg>
      <p style={{marginTop: '15px', marginLeft: '15px'}}>Purchase History</p>
      <p style={{color: 'grey', marginLeft: 'auto', marginTop: '15px', marginRight: '10px'}}>Browse</p>
      <h1 style={{fontSize: '24px', color: 'grey', marginTop: '8px', marginRight: '10px'}}>{`>`}</h1>
  </div>
  </div>
  </div>
    )
  }

  export default index