// index.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import TopNav1 from '../../components/top-nav1';
import LeftNav from '../../components/left-nav';
import TopNav2 from '../../components/top-nav2';

const Index = () => {
  const router = useRouter();
  const searchParam = router.query.result;
  const userParam = router.query.user;
  const [showProducts, setShowProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [moreProducts, setMoreProducts] = useState(-4)

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
    setIsLoading(true)
    async function fetchProducts() {
      try {
        const response = await axios.get(`/api/searchProduct?result=${encodeURIComponent(searchParam as string)}`); // Update endpoint name
        setShowProducts(response.data.reverse());
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (searchParam) {
      fetchProducts();
    }
  }, [searchParam]);

  function productView(user, productId) {
    router.push(`productView?user=${encodeURIComponent(user)}&productId=${encodeURIComponent(productId)}`)
  }

  async function loadMoreProducts() {
    setIsFetching(true);
    try {
      const response = await axios.get(`/api/homeProducts`);
      const newProducts = response.data;
      const fetchCount = Math.floor(showProducts.length / 8);
      const updatedProducts = [...showProducts, ...newProducts];
      const slicedProducts = updatedProducts.slice(0, fetchCount * 8);
      setShowProducts(slicedProducts);
      setMoreProducts(prevMoreProducts => prevMoreProducts - 8);
    } catch (error) {
      console.error('Error fetching more products:', error);
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <div>
      <TopNav1 />
      <TopNav2 />
      <LeftNav />
      {isLoading ? <p>Fetching products...</p>:
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {showProducts.slice(moreProducts).reverse().map((product, index) => (
        <div id = {`prodContainer${index}`} key={index} onMouseEnter={() => applyMouseEnter(index)} onMouseLeave={() => applyMouseLeave(index)} style={{
          width: '20%',
          flex: '0 0 auto',
          margin: '50px 20px 20px 20px',
          cursor: 'pointer',
          border: 'solid 1px lightGrey',
          padding: '20px 20px 40px 20px',
        }} onClick={() => productView(userParam, product.id)}>
          <p>{product.name}</p>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
          <p style={{marginTop: '20px'}}>Price: ฿{product.price}</p>
          <p>Remaining: {product.amount}</p>

        </div>
      ))}
      <h3 onClick={loadMoreProducts} style={{color: isFetching ? 'grey': '#800020', margin: 'auto', fontWeight: '200', padding: '20px 0px 40px 0px'}}>More Products</h3>
      </div>
      }
    </div>
  );
};

export default Index;
