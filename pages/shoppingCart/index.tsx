import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import TopNav1 from '../../components/top-nav1';
import TopNav2 from '../../components/top-nav2';
import LeftNav from '../../components/left-nav';

const Index = () => {
  const router = useRouter();
  const userParam = router.query.user
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchShoppingCart = async () => {
      try {
        const response = await axios.get(`/api/fetchShoppingCart?user=${userParam}`);
        setProducts(response.data);
        setIsFetching(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsFetching(false);
      }
    };
  
    fetchShoppingCart();
  }, [userParam]);

  const deleteShoppingCartProduct = async (productId) => {
    try {
      await axios.delete(`/api/deleteShoppingCart?user=${userParam}&productId=${productId}`) 
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const onMouseEnterApply = (index) => {
    const imageElement = document.getElementById(`prodContainer${index}`);
    if (imageElement) {
      imageElement.style.backgroundColor = 'lightGrey';
    }
  };

  const onMouseLeaveApply = (index) => {
    const imageElement = document.getElementById(`prodContainer${index}`);
    if (imageElement) {
      imageElement.style.backgroundColor = 'white';
    }
  };

  const onMouseEnterDelete = (index) => {
    const deleteIcon = document.getElementById(`delete${index}`);
    if(deleteIcon) {
      deleteIcon.style.fill = 'red';
    }
  };

  const onMouseLeaveDelete = (index) => {
    const deleteIcon = document.getElementById(`delete${index}`);
    if(deleteIcon) {
      deleteIcon.style.fill = 'black';
    }
  };

  return (
    <div>
      <TopNav1 />
      <LeftNav />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <h3 style={{marginTop: '20px'}}>Shopping Cart</h3>
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
                    margin: '20px 20px 20px 20px',
                    cursor: 'pointer',
                    border: 'solid 1px lightGrey',
                    padding: '20px 20px 40px 20px',
                    zIndex: '0'
                  }}
                  onMouseEnter={() => onMouseEnterApply(index)}
                  onMouseLeave={() => onMouseLeaveApply(index)}
                  onClick={() => router.push(`/productView?user=${userParam}&productId=${product.id}`)}
                >
                  <img src={product.image} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
                  <p style={{ marginTop: '40px' }}>{product.name}</p>
                  <p>{product.price}</p>
                  <p>{product.amount}</p>
                  <svg id={`delete${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} onMouseEnter={() => onMouseEnterDelete(index)} onMouseLeave={() => onMouseLeaveDelete(index)} onClick={(event) => {deleteShoppingCartProduct(product.id); event.stopPropagation();}}><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 
 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
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
