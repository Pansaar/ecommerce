// index.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Index = () => {
  const router = useRouter();
  const searchParam = router.query.result;
  const [showProducts, setShowProducts] = useState([]);

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

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`/api/searchProduct?result=${encodeURIComponent(searchParam as string)}`); // Update endpoint name
        setShowProducts(response.data);
        console.log(showProducts)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (searchParam) {
      fetchProducts();
    }
  }, [searchParam]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {showProducts.reverse().map((product, index) => (
        <div id = {`prodContainer${index}`} key={index} onMouseEnter={() => applyMouseEnter(index)} onMouseLeave={() => applyMouseLeave(index)} style={{
          width: '20%',
          flex: '0 0 auto',
          margin: '50px 20px 20px 20px',
          cursor: 'pointer',
          border: 'solid 1px lightGrey',
          padding: '20px 20px 40px 20px',
        }}>
          <p>{product.name}</p>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;
