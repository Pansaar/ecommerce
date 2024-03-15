import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopNav1 from '../../components/top-nav1';
import { useRouter } from 'next/router';
import TopNav2 from '../../components/top-nav2';
import LeftNav from '../../components/left-nav';

const Index = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState(null);
    const productIdParam = router.query.productId
    const userParam = router.query.user

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/api/productId?user=${userParam}&productId=${productIdParam}`);
                setProducts(response.data);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (productIdParam) {
            fetchProduct();
        }
    }, [productIdParam]);

    return (
        <div>
            <TopNav1 />
            <TopNav2 />
            <LeftNav />
            {isLoading ?
                <p>Loading...</p>
                : products ? ( 
                <div>
                    <div style={{border: 'solid 1px lightGrey', boxShadow: '2px 2px 2px lightGrey'}}>
                    <img src={products.image} style={{width: '800px', height: '500px', margin: '40px auto', display: 'block'}}/>
                    </div>
                    <div style={{margin: '20px 0px 0px 10px'}}>
                    <p>Name: {products.name}</p>
                    <p>Price: {products.price}</p>
                    <p>Remaining: {products.amount}</p>
                    <p>Description: {products.description}</p>
                    <p>Category: {products.category}</p>
                    <p>Last updated: {products.updatedAt}</p>
                    </div>
                </div>
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
};

export default Index;
