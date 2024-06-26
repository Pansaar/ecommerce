import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import TopNav1 from '../../components/top-nav1';
import TopNav2 from '../../components/top-nav2';
import LeftNav from '../../components/left-nav';
import useAuthStore from '../../store/user-auth';
import useProductIdStore from '../../store/products';

const Index = () => {
  const router = useRouter();
  const [showProducts, setShowProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { authenticatedUser } = useAuthStore();
  const { productId, setProductId, product, setProduct } = useProductIdStore();
  const [moreProducts, setMoreProducts] = useState(-4);
  const [isFetching, setIsFetching] = useState(false)
  const [searchMode, setSearchMode] = useState(false)
  const userParam = router.query.user;

  useEffect(() => {
    setSearchMode(router.query.search !== undefined);
  }, [router.query.search]);

  useEffect(() => {
    if(authenticatedUser !== userParam) {
      router.push(`/home?user=${authenticatedUser}`)
    }
  },[userParam])

  async function loadMoreProducts() {
    setIsFetching(true);
    try {
        let response, newProducts;
        if (router.query.category === 'electronics') {
            response = await axios.get(`/api/fetchElectronics`);
        } else if (router.query.category === 'clothing') {
            response = await axios.get(`/api/fetchClothing`);
        } else if (router.query.category === 'jewelery') {
            response = await axios.get(`/api/fetchJewelery`);
        } else if (router.query.category === 'food') {
            response = await axios.get(`/api/fetchFood`);
        } else if (router.query.category === 'beauty') {
            response = await axios.get(`/api/fetchBeauty`);
        } else if (router.query.category === undefined) {
            response = await axios.get(`/api/homeProducts`)
        }

        if (response && response.data) {
            newProducts = response.data;
        } else {
            console.log('No data received for the category:', router.query.category);
            return;
        }

        if (showProducts.length < 4) {
            console.log('Fetching terminated');
        } else if (showProducts.length >= 4) {
          const updatedProducts = [...showProducts.slice(0, -showProducts.length-1), ...newProducts];
          const fetchCount = Math.ceil(updatedProducts.length / 4);
          const slicedProducts = updatedProducts.slice(0, fetchCount * 4);
          setShowProducts(slicedProducts);
          setMoreProducts(prevMoreProducts => prevMoreProducts - 4);
        }
    } catch (error) {
        console.error('Error fetching more products:', error);
    } finally {
        setIsFetching(false);
    }
}

useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      try {
        let response;
        if (router.query.category === 'electronics') {
          response = await axios.get('/api/fetchElectronics');
        } else if (router.query.category === 'clothing') {
          response = await axios.get('/api/fetchClothing');
        } else if (router.query.category === 'jewelery') {
          response = await axios.get('/api/fetchJewelery');
        } else if (router.query.category === 'food') {
          response = await axios.get('/api/fetchFood');
        } else if (router.query.category === 'beauty') {
          response = await axios.get('/api/fetchBeauty');
        } else if (router.query.category === undefined) {
          response = await axios.get('/api/homeProducts');
        }
  
        if (response && response.data) {
          setShowProducts(response.data);
        } else {
          console.log('No data received for the category:', router.query.category);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [router.query.category, product]);
  

  const handleProductClick = async (user, productId) => {
    const selectedProductId = productId;
      if (selectedProductId) {
        try {
          const response = await axios.get(`/api/fetchSellerId?user=${user}&productId=${selectedProductId}`);
          const browsingUser = response.data.user;
          const sellerId = response.data.sellerId;
          if (sellerId === browsingUser) {
            router.push(`/editMyMerchant?user=${encodeURIComponent(authenticatedUser)}&productId=${encodeURIComponent(selectedProductId)}`);
          } else {
            router.push(`/productView?user=${encodeURIComponent(authenticatedUser)}&productId=${encodeURIComponent(selectedProductId)}`);
          }
        } catch (error) {
          console.error('Error handling click:', error);
        }
      } else {
        router.push(`/productView?user=${encodeURIComponent(authenticatedUser)}&productId=${encodeURIComponent(selectedProductId)}`);
      }
      setProductId(selectedProductId);
  };

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
      {isLoading ? <p>Fetching products...</p> :
      <div>
        <p style={{display: isFetching ? 'block': 'none'}}>Fetching more products...</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        {searchMode ? product.slice(moreProducts).reverse().map((product, index) => (
          <div
            key={index}
            id={`prodContainer${index}`}
            onClick={() => handleProductClick(authenticatedUser, product.id)}
            onMouseEnter={() => onMouseEnterApply(index)}
            onMouseLeave={() => onMouseLeaveApply(index)}
            style={{
              width: '20%',
              flex: '0 0 auto',
              margin: '50px 20px 20px 20px',
              cursor: 'pointer',
              border: 'solid 1px lightGrey',
              padding: '20px 20px 40px 20px',
              
            }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
            <p style={{ marginTop: '40px' }}>{product.name}</p>
            <p>฿{product.price}</p>
            <p>Remaining: {product.amount}</p>
          </div>
        )) : showProducts.slice(moreProducts).reverse().map((product, index) => (
          <div
            key={index}
            id={`prodContainer${index}`}
            onClick={() => handleProductClick(authenticatedUser, product.id)}
            onMouseEnter={() => onMouseEnterApply(index)}
            onMouseLeave={() => onMouseLeaveApply(index)}
            style={{
              width: '18%',
              flex: '0 0 auto',
              margin: '50px 20px 20px 20px',
              cursor: 'pointer',
              border: 'solid 1px lightGrey',
              padding: '20px 20px 40px 20px',
              backgroundColor: product.isHovered ? 'lightGrey' : 'white',
            }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
            <p style={{ marginTop: '40px' }}>{product.name}</p>
            <p>฿{product.price}</p>
            <p>Remaining: {product.amount}</p>
          </div>
        ))}
      </div>
      <h3 style={{display: 'flex', cursor: 'pointer', color: isFetching ? 'grey': '#800020', fontWeight: '200', justifyContent: 'center'}} id='moreProducts' onClick={loadMoreProducts}>More Products</h3>
      </div>
      }
    </div>
  );
};

export default Index;