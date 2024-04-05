import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import TopNav1 from '../../components/top-nav1';
import TopNav2 from '../../components/top-nav2';
import LeftNav from '../../components/left-nav';
import useAuthStore from '../../store/user-auth';

const Index = () => {
  const router = useRouter();
  const [showProducts, setShowProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { authenticatedUser } = useAuthStore();


  useEffect(() => {
    setIsLoading(true);
    const fetchFood = async () => {
      try {
        const response = await axios.get(`/api/fetchFood`);
        setShowProducts(response.data.reverse());
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchFood();
  }, []);

  const handleProductClick = (user, productId) => {
    router.push(`productView?user=${encodeURIComponent(user)}&productId=${encodeURIComponent(productId)}`);
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
