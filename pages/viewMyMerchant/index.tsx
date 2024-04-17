import React from 'react';
import LeftNav from '../../components/left-nav';
import TopNav1 from '../../components/top-nav1';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    const userParam = router.query.user;
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/api/fetchEditMyMerchant?user=${userParam}`, {
                    data: {
                        userParam
                    }
                })
                setProducts(response.data);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [userParam]);

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


    return (
        <div>
            <TopNav1 />
            <LeftNav />
            {isLoading ? <p>Fetching products...</p>:
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {products.reverse().map((product, index) => (
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
                            zIndex: '0'
                        }}
                        onMouseEnter={() => onMouseEnterApply(index)}
                        onMouseLeave={() => onMouseLeaveApply(index)}
                        onClick={() => router.push(`/editMyMerchant?user=${userParam}&productId=${product.id}`)}
                    >
                        <img src={product.image} style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }} />
                        <p style={{ marginTop: '40px' }}>{product.name}</p>
                        <p>{product.price} THB</p>
                        <p>Amount: {product.amount}</p>
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default Index;
