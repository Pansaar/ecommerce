import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import TopNav1 from '../../components/top-nav1';
import TopNav2 from '../../components/top-nav2';
import LeftNav from '../../components/left-nav';

const Index = () => {
  const router = useRouter();
  const userParam = router.query.user;
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchShoppingCart = async () => {
      try {
        if (!userParam) {
          console.error('User parameter is missing');
          return;
        }
        const response = await axios.get(`/api/fetchShoppingCart?user=${encodeURIComponent(userParam as string)}`);
        setProducts(response.data);
        setIsFetching(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsFetching(false);
      }
    };
  
    fetchShoppingCart();
  }, [userParam])

  function onMouseEnterApply(index) {
    if (index >= 0) {
      const imageElement = document.getElementById(`prodContainer${index}`);
      if (imageElement) {
        imageElement.style.backgroundColor = 'lightGrey';
      }
    }
  }

  function onMouseLeaveApply(index) {
    if (index >= 0) {
      const imageElement = document.getElementById(`prodContainer${index}`);
      if (imageElement) {
        imageElement.style.backgroundColor = 'white';
      }
    }
  }
  

  return (
    <div>
      <TopNav1 />
      <TopNav2 />
      <LeftNav />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {isFetching ? (
          <p>Fetching products...</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            {products.length === 0 ? (
              <p>Your shopping cart is empty</p>
            ) : (
              products.map((product, index) => (
                <div
                id={`prodContainer${index}`}
                  key={index}
                  style={{
                    width: '20%',
                    flex: '0 0 auto',
                    margin: '50px 20px 20px 20px',
                    cursor: 'pointer',
                    border: 'solid 1px lightGrey',
                    padding: '20px 20px 40px 20px',
                  }}
                  onMouseEnter={() => onMouseEnterApply(index)}
                  onMouseLeave={() => onMouseLeaveApply(index)}
                  onClick={() => router.push(`/productView?user=${userParam}&productId=${product.id}`)}
                >
                  <img src={product.image} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
                  <p style={{ marginTop: '40px' }}>{product.name}</p>
                  <p>{product.price}</p>
                  <p>{product.amount}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
