// index.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Index = () => {
  const router = useRouter();
  const searchParam = router.query.result;
  const [showProducts, setShowProducts] = useState([]);

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
    <div>
      {showProducts.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} style={{ width: '200px' }} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;
