import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useLeftNavStateStore from '../store/left-nav';
import router, { useRouter } from 'next/router';


const leftNav = () => {
    const { showNav, setShowNav } = useLeftNavStateStore();
  return (
    <nav style={{
        display: showNav ? "flex": "none",
    }}>
        <ul className='vh-100' style={{overflowY:"hidden", listStyle:"none", width: "170px", marginBottom:"-10px", boxShadow: "1px 1px 2px grey"}}>
            <li style={{marginTop:"30px", cursor: "pointer"}}>Profile</li>
            <li style={{marginTop:"30px", cursor: "pointer"}}>Shopping Cart</li>
            <li style={{marginTop:"30px", cursor: "pointer"}}>MyMerchant</li>
            <li style={{marginTop:"30px", cursor: "pointer"}} onClick={() => router.replace("/")}>Log out</li>
        </ul>
    </nav>
  )
}

export default leftNav