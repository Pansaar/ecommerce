// index.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import TopNav1 from '../../components/top-nav1';
import LeftNav from '../../components/left-nav';
import TopNav2 from '../../components/top-nav2';
import useProductIdStore from '../../store/products';

const Index = () => {
  const router = useRouter();
  const userParam = router.query.user;
  const [isLoading, setIsLoading] = useState(false)
  const { product, setProduct } = useProductIdStore();

  function applyMouseEnter(index) {
    if (index >= 0) {
      const imageElement = document.getElementById(`prodContainer${index}`);
      if (imageElement) {
        imageElement.style.backgroundColor = 'lightGrey';
      }
    }  
  }

  function applyMouseLeave(index) {
    if (index >= 0) {
      const imageElement = document.getElementById(`prodContainer${index}`);
      if (imageElement) {
        imageElement.style.backgroundColor = 'white';
      }
    }  
  }

  function productView(user, productId) {
    router.push(`productView?user=${encodeURIComponent(user)}&productId=${encodeURIComponent(productId)}`)
  }

  return (
    <div>
      <TopNav1 />
      <TopNav2 />
      <LeftNav />
      {isLoading ? <p>Fetching products...</p>:
      <div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%'}}>
      {product.slice().reverse().map((product, index) => (
        <div id = {`prodContainer${index}`} key={index} onMouseEnter={() => applyMouseEnter(index)} onMouseLeave={() => applyMouseLeave(index)} style={{
          width: '20%',
          flex: '0 0 auto',
          margin: '50px 20px 20px 20px',
          cursor: 'pointer',
          border: 'solid 1px lightGrey',
          padding: '20px 20px 40px 20px',
        }} onClick={() => productView(userParam, product.id)}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
          <p style={{marginTop: '40px'}}>{product.name}</p>
          <p>Price: ฿{product.price}</p>
          <p>Remaining: {product.amount}</p>

        </div>
      ))}
      </div>
      <h3 style={{fontWeight: '200', color: '#800020', justifyContent: 'center', display: 'flex', cursor: 'pointer'}}>More Products</h3>
      </div>
      }
    </div>
  );
};

export default Index;
