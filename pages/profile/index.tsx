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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} fill='white' style={{position: 'fixed', top: '15px', right: '70px', zIndex: '2'}}>
        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} fill='white' style={{position: 'fixed', top: '15px', right: '30px', zIndex: '2'}}>
        <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
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
  <p style={{fontSize: '16px', marginTop: '-5px'}}>Followers | Following</p>
  </div>
</div>
<div className='vh-100' style={{boxShadow: '1px 1px 5px grey', alignItems: 'flex-start', margin: '30px 30px', borderRadius: '10px'}}>
<div style={{height: '50px', width: '100%', display: 'flex', alignItems: 'center'}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={30} fill='rgb(128, 0, 32)' style={{alignSelf: 'center', marginLeft: '10px'}}><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
  <p style={{marginLeft: '10px', marginTop: '15px'}}>6.7 Payday</p>
  <h1 style={{fontSize: '24px', color: 'grey', marginLeft: 'auto', marginRight: '10px', marginTop: '8px'}}>{`>`}</h1>
</div>
<div style={{borderTop: 'solid 1px lightgrey', borderBottom: 'solid 1px lightgrey', width: '100%', display: 'flex', flexDirection: 'column', paddingTop: '20px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{marginLeft: '80px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40} fill='rgb(128, 0, 32)' style={{marginTop: '10px'}}><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            <p style={{textAlign: 'center', marginTop: '10px'}}>wtf</p>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={50} fill='rgb(128, 0, 32)' style={{marginTop: '10px'}}><path d="M0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192V128z"/></svg>
            <p style={{textAlign: 'center', marginTop: '10px'}}>wtf</p>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={50} fill='rgb(128, 0, 32)' style={{marginTop: '15px'}}><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            <p style={{textAlign: 'center', marginTop: '10px'}}>wtf</p>
        </div>
        <div style={{marginRight: '80px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={50} fill='rgb(128, 0, 32)' style={{marginTop: '10px'}}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            <p style={{textAlign: 'center', marginTop: '10px'}}>wtf</p>
        </div>
    </div>
    </div>
    <div style={{height: '50px', borderBottom: '1px solid lightgrey', width: '100%', display: 'flex', alignItems: 'center'}}>
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