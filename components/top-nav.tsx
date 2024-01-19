import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLeftNavStateStore from '../store/left-nav';

const TopNav = () => {
  const { showNav, setShowNav } = useLeftNavStateStore();
  const [hover, setHover] = useState(false);

  const openCloseLeftNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <div className='text-white d-flex' style={{ padding: "10px", background: "linear-gradient(91.7deg, rgb(50, 25, 79) -4.3%, rgb(122, 101, 149) 101.8%)" }}>
        <svg xmlns="http://www.w3.org/2000/svg" className='mx-2 mb-1' style={{ cursor: "pointer" }} fill="white" height="20" width="20" viewBox="0 0 448 512" onClick={openCloseLeftNav}>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <p className='m-auto'><span style={{ color: "red" }}>SUMMER SALE</span> - UP TO 70% OFF</p>
      </div>
      <div className='d-flex' style={{ padding: "10px", backgroundColor: "white", boxShadow: "1px 1px 2px grey", justifyContent: "space-between" }}>
        <h1 className='align-items-center d-flex'>Ecomm</h1>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Electronics</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Clothing</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Jewelery</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Food</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Beauty</p>
        <input placeholder='Browse Products' className='mt-3' style={{ width: "300px", height: "30px", padding: "2px 5px 2px 5px" }}></input>
      </div>
    </div>
  );
};

export default TopNav;
