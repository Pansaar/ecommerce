// index.js
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
  const { productId, setProductId } = useProductIdStore()


  useEffect(() => {
    setIsLoading(true);
    const fetchBeauty = async () => {
      try {
        const response = await axios.get(`/api/fetchBeauty`);
        setShowProducts(response.data.reverse());
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchBeauty();
  }, [productId]);

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

  const handleMouseEnter = (index) => {
    setShowProducts(prevProducts => prevProducts.map((product, i) => {
      if (i === index) {
        return { ...product, isHovered: true };
      }
      return product;
    }));
  };

  const handleMouseLeave = (index) => {
    setShowProducts(prevProducts => prevProducts.map((product, i) => {
      if (i === index) {
        return { ...product, isHovered: false };
      }
      return product;
    }));
  };

  return (
    <div>
      <TopNav1 />
      <TopNav2 />
      <LeftNav />
      {isLoading ? <p>Fetching products...</p> : 
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%'}}>
        {showProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => handleProductClick(authenticatedUser, product.id)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              width: '20%',
              flex: '0 0 auto',
              margin: '50px 20px 20px 20px',
              cursor: 'pointer',
              border: 'solid 1px lightGrey',
              padding: '20px 20px 40px 20px',
              backgroundColor: product.isHovered ? 'lightGrey' : 'white',
            }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
            <p style={{marginTop: '40px'}}>{product.name}</p>
            <p>฿{product.price}</p>
            <p>Remaining: {product.amount}</p>
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default Index;
