import React from 'react'
import useLeftNavStateStore from '../store/left-nav';

const topNav1 = () => {
  const { showNav, setShowNav } = useLeftNavStateStore();

  const openCloseLeftNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div style={{zIndex: '0'}}>
        <div className='text-white d-flex' style={{ padding: "10px", background: "#800020" }}>
        <svg xmlns="http://www.w3.org/2000/svg" className='mx-2 mb-1' style={{ cursor: "pointer" }} fill="white" height="20" width="20" viewBox="0 0 448 512" onClick={openCloseLeftNav}>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <p className='m-auto'>SUMMER SALE - <span style={{backgroundColor: 'white', color: 'red', padding: '0px 5px 0px 5px'}}>UP TO 70% OFF</span></p>
      </div>
    </div>
  )
}

export default topNav1