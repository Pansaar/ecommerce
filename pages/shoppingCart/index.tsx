import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import TopNav1 from '../../components/top-nav1';
import LeftNav from '../../components/left-nav';
import useAuthStore from '../../store/user-auth';

const Index = () => {
  const router = useRouter();
  const userParam = router.query.user;
  const [products, setProducts] = useState([]);
  const [cartItemAmounts, setCartItemAmounts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const { authenticatedUser } = useAuthStore();

  useEffect(() => {
    const fetchShoppingCart = async () => {
      if (!userParam) return;
      try {
        const response = await axios.get(`/api/fetchShoppingCart?user=${encodeURIComponent(userParam as string)}`);
        setProducts(response.data.products);
        setCartItemAmounts(response.data.cartItemAmount);
        setIsFetching(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsFetching(false);
      }
    };
  
    fetchShoppingCart();
  }, [userParam]);

  useEffect(() => {
    if(authenticatedUser !== userParam) {
      router.push(`/home?user=${authenticatedUser}`)
    }
  },[userParam])

  const deleteShoppingCartProduct = async (productId) => {
    try {
      await axios.delete(`/api/deleteShoppingCart?user=${encodeURIComponent(userParam as string)}&productId=${productId}`)
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
    const deleteDiv = document.getElementById(`deleteDiv${index}`);
    if(deleteIcon) {
      deleteIcon.style.fill = '#800020';
      deleteDiv.style.borderColor = '#800020'
    }
  };

  const onMouseLeaveDelete = (index) => {
    const deleteIcon = document.getElementById(`delete${index}`);
    const deleteDiv = document.getElementById(`deleteDiv${index}`);
    if(deleteIcon) {
      deleteIcon.style.fill = 'black';
      deleteDiv.style.borderColor = 'lightGrey'
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
                <div style={{
                  position: 'relative',
                  width: '20%',
                  flex: '0 0 auto',
                  margin: '20px 20px 20px 20px',
                  cursor: 'pointer',
                  border: 'solid 1px lightGrey',
                  paddingBottom: '39px',
                  zIndex: '0'
                }}>
                <div
                  id={`prodContainer${index}`}
                  style={{padding: '20px 20px 1px 20px'}}
                  key={index}
                  onMouseEnter={() => onMouseEnterApply(index)}
                  onMouseLeave={() => onMouseLeaveApply(index)}
                  onClick={() => router.push(`/productView?user=${userParam}&productId=${product.id}`)}
                >
                  <img src={product.image} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
                  <p style={{ marginTop: '40px' }}>{product.name}</p>
                  <p>{product.price} THB</p>
                  <p>Amount: {cartItemAmounts[index]?.prodAmount}</p>
                </div>
                <div id={`deleteDiv${index}`} style={{ position: 'absolute', bottom: '0px', right: '0px', zIndex: '1', width: '100%', display: 'flex', justifyContent: 'center', height: '40px', border: '1px solid lightGrey' }} onClick={(event) => {deleteShoppingCartProduct(product.id); event.stopPropagation();}} onMouseEnter={() => onMouseEnterDelete(index)} onMouseLeave={() => onMouseLeaveDelete(index)}>
                  <svg id={`delete${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15}><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 
 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                  </div>
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
