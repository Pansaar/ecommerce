import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import useAuthStore from '../store/user-auth';

const TopNav2 = () => {
  const router = useRouter()
  const userParam = router.query.user
  const [search, setSearch] = useState('');
  const { authenticatedUser } = useAuthStore();
  const [isSearching, setIsSearching] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/homeProducts?user=${userParam}`);
      const foundItem = response.data.find(item => item.name.toLowerCase().includes(search.toLowerCase()));
      
      if (foundItem) {
        router.push(`/searchProduct?user=${encodeURIComponent(authenticatedUser)}&result=${encodeURIComponent(search)}`, undefined, { shallow: true })
      } else {
        setIsSearching(false)
        console.log('Search not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };  


  return (
    <div style={{ position: 'sticky', top: '0', zIndex: '1' }}>
      <div className='d-flex' style={{ padding: "10px", backgroundColor: "white", boxShadow: "1px 1px 2px grey", justifyContent: "space-between" }}>
        <h1 className='align-items-center d-flex'>Ecomm</h1>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Electronics</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Clothing</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Jewelry</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Food</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }}>Beauty</p>
        <form onSubmit={handleSubmit} style={{ position: 'relative', display: 'inline-block' }}>
          <input
            disabled={isSearching}
            placeholder='Browse Products'
            className='mt-3'
            style={{ width: '300px', height: '30px', padding: '2px 30px 2px 5px' }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            onClick={() => setIsSearching(true)}
            style={{ position: 'absolute', right: '0px', height: '30px', width: '40px', padding: '2px 10px', cursor: 'pointer', top: '16px', border: '1px solid' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='black' width={15} style={{ display: 'block', margin: 'auto' }}>
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TopNav2;
