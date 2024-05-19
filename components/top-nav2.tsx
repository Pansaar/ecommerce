import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import useAuthStore from '../store/user-auth';
import useProductIdStore from '../store/products';

const TopNav2 = () => {
  const router = useRouter()
  const userParam = router.query.user
  const [search, setSearch] = useState('');
  const { authenticatedUser } = useAuthStore();
  const [isSearching, setIsSearching] = useState(false)
  const {product, setProduct} = useProductIdStore()

  const handleSubmit = async (e) => {
    e.preventDefault();
      if(window.location.pathname === '/home') {
      const response = await axios.get(`/api/homeProducts?user=${userParam}`);
      const foundItems = response.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        if (foundItems) {
        await setProduct(foundItems);
        router.push(`/product?user=${authenticatedUser}&search=${search}`)
        setIsSearching(false)
      } else if(!foundItems) {
        setIsSearching(false)
        console.log('Search not found');
      }
    } else if(window.location.pathname === '/product' && router.query.category === 'electronics') {
      const response = await axios.get(`/api/fetchElectronics?user=${userParam}`);
      const foundItems = response.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        if (foundItems) {
        await setProduct(foundItems);
        router.push(`/product?user=${authenticatedUser}&category=electronics&search=${search}`)
        setIsSearching(false)
      } else if(!foundItems) {
        setIsSearching(false)
        console.log('Search not found');
      }
    } else if(window.location.pathname === '/product' && router.query.category === 'clothing') {
      const response = await axios.get(`/api/fetchClothing?user=${userParam}`);
      const foundItems = response.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        if (foundItems) {
        await setProduct(foundItems);
        router.push(`/product?user=${authenticatedUser}&category=clothing&search=${search}`)
        setIsSearching(false)
      } else if(!foundItems) {
        setIsSearching(false)
        console.log('Search not found');
      }
    } else if(window.location.pathname === '/product' && router.query.category === 'jewelery') {
      const response = await axios.get(`/api/fetchJewelery?user=${userParam}`);
      const foundItems = response.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        if (foundItems) {
        await setProduct(foundItems);
        router.push(`/product?user=${authenticatedUser}&category=jewelery&search=${search}`)
        setIsSearching(false)
      } else if(!foundItems) {
        setIsSearching(false)
        console.log('Search not found');
      }
    } else if(window.location.pathname === '/product' && router.query.category === 'food') {
      const response = await axios.get(`/api/fetchFood?user=${userParam}`);
      const foundItems = response.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        if (foundItems) {
        await setProduct(foundItems);
        router.push(`/product?user=${authenticatedUser}&category=food&search=${search}`)
        setIsSearching(false)
      } else if(!foundItems) {
        setIsSearching(false)
        console.log('Search not found');
      }
    } else if(window.location.pathname === '/product' && router.query.category === 'beauty') {
      const response = await axios.get(`/api/fetchBeauty?user=${userParam}`);
      const foundItems = response.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        if (foundItems) {
        await setProduct(foundItems);
        router.push(`/product?user=${authenticatedUser}&category=beauty&search=${search}`)
        setIsSearching(false)
      } else if(!foundItems) {
        setIsSearching(false)
        console.log('Search not found');
      }
    } else if(window.location.pathname === '/productView') {
      const response = await axios.get(`/api/homeProducts?user=${userParam}`);
      const foundItems = response.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        if (foundItems) {
        await setProduct(foundItems);
        router.push(`/product?user=${authenticatedUser}&search=${search}`)
        setIsSearching(false)
      } else if(!foundItems) {
        setIsSearching(false)
        console.log('Search not found');
      }
    } else if(window.location.pathname === '/editMyMerchant') {
      const response = await axios.get(`/api/homeProducts?user=${userParam}`);
      const foundItems = response.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        if (foundItems) {
        await setProduct(foundItems);
        router.push(`/product?user=${authenticatedUser}&search=${search}`)
        setIsSearching(false)
      } else if(!foundItems) {
        setIsSearching(false)
        console.log('Search not found');
      }
    }
  }     
        

  return (
    <div style={{ position: 'sticky', top: '0', zIndex: '1' }}>
      <div className='d-flex' style={{ padding: "10px", backgroundColor: "white", boxShadow: "1px 1px 2px grey", justifyContent: "space-between" }}>
        <h1 className='align-items-center d-flex'>Ecomm</h1>
        <p id='electronics' className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }} onClick={() => router.push(`/product?user=${encodeURIComponent(authenticatedUser)}&category=${encodeURIComponent('electronics')}`)}>Electronics</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }} onClick={() => router.push(`/product?user=${encodeURIComponent(authenticatedUser)}&category=${encodeURIComponent('clothing')}`)}>Clothing</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }} onClick={() => router.push(`/product?user=${encodeURIComponent(authenticatedUser)}&category=${encodeURIComponent('jewelery')}`)}>Jewelry</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }} onClick={() => router.push(`/product?user=${encodeURIComponent(authenticatedUser)}&category=${encodeURIComponent('food')}`)}>Food</p>
        <p className='align-items-center d-flex mt-3' style={{ cursor: "pointer" }} onClick={() => router.push(`/product?user=${encodeURIComponent(authenticatedUser)}&category=${encodeURIComponent('beauty')}`)}>Beauty</p>
        <form onSubmit={handleSubmit} style={{ position: 'relative', display: 'inline-block' }}>
          <input
          id='browseProducts'
            disabled={isSearching}
            placeholder='Browse Products'
            className='mt-3'
            style={{ width: '300px', height: '30px', padding: '2px 30px 2px 5px' }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            maxLength={32}
          />
          <button
            id="search"
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
