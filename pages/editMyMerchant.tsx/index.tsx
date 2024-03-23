import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopNav1 from '../../components/top-nav1';
import { useRouter } from 'next/router';
import TopNav2 from '../../components/top-nav2';
import LeftNav from '../../components/left-nav';

interface Product {
    price: string;
    name: string;
    description: string;
    amount: number
}

const Index = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product | null>(null);
    const [editableFields, setEditableFields] = useState<Record<string, boolean>>({});
    const productIdParam = router.query.productId;
    const userParam = router.query.user;

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/api/productId?user=${userParam}&productId=${productIdParam}`);
                setProducts(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setIsLoading(false);
            }
        };

        if (productIdParam) {
            fetchProduct();
        }
    }, [productIdParam, userParam]);

    const handleEdit = (field: string) => {
        setEditableFields((prevEditableFields) => ({
            ...prevEditableFields,
            [field]: true,
        }));
    };

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const { value } = event.target;
        setProducts((prevProducts) => ({
            ...prevProducts,
            [field]: value,
        }));
    };

    const handleSave = (field: string) => {
        console.log(`Saving ${field} of product`);
        setEditableFields((prevEditableFields) => ({
            ...prevEditableFields,
            [field]: false,
        }));
    };

    return (
        <div>
            <TopNav1 />
            <TopNav2 />
            <LeftNav />
            {isLoading ? (
                <p>Loading...</p>
            ) : products ? (
                <div style={{ paddingBottom: '60px' }}>
                    <div>
                        <img src={products.image} style={{ width: '800px', height: '500px', margin: 'auto', display: 'block' }} />
                        <p style={{ backgroundColor: '#800020', color: 'white', padding: '10px', margin: '0', textAlign: 'center' }}>Product Commercials</p>
                        <div style={{ backgroundColor: 'beige', border: 'solid 1px beige' }}>
                            <div style={{ backgroundColor: 'white', paddingBottom: '10px' }}>
                                <p style={{ color: '#800020', marginLeft: '10px', paddingTop: '10px' }}>
                                    {editableFields.price ? (
                                        <input
                                            type="text"
                                            value={products.price}
                                            onChange={(event) => handleFieldChange(event, 'price')}
                                            onBlur={() => handleSave('price')}
                                            autoFocus
                                        />
                                    ) : (
                                        <span onClick={() => handleEdit('price')}>
                                            ฿<span style={{ fontSize: '20px' }}>{products.price}</span>
                                        </span>
                                    )}
                                </p>
                                <p style={{ color: '#800020', marginLeft: '10px', paddingTop: '10px' }}>
                                    {editableFields.amount ? (
                                        <input
                                            type="text"
                                            value={products.amount.toString()}
                                            onChange={(event) => handleFieldChange(event, 'amount')}
                                            onBlur={() => handleSave('amount')}
                                        />
                                    ) : (
                                        <span onClick={() => handleEdit('amount')}>
                                            Amount: {products.amount}
                                        </span>
                                    )}
                                </p>
                                <p style={{ color: '#800020', marginLeft: '10px', paddingTop: '10px' }}>
                                    {editableFields.category ? (
                                        <input
                                            type="text"
                                            value={products.category}
                                            onChange={(event) => handleFieldChange(event, 'category')}
                                            onBlur={() => handleSave('category')}
                                        />
                                    ) : (
                                        <span onClick={() => handleEdit('category')}>
                                            Category: {products.category}
                                        </span>
                                    )}
                                </p>
                                <p style={{ color: '#800020', marginLeft: '10px', paddingTop: '10px' }}>
                                    {editableFields.description ? (
                                        <input
                                            type="text"
                                            value={products.description}
                                            onChange={(event) => handleFieldChange(event, 'description')}
                                            onBlur={() => handleSave('description')}
                                        />
                                    ) : (
                                        <span onClick={() => handleEdit('description')}>
                                            Description: {products.description}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '60px', position: 'fixed', bottom: '0', justifyContent: 'space-between', display: 'flex', cursor: 'pointer' }}>
                        <div style={{ position: 'relative', width: '25%', height: '100%', backgroundColor: '#FFFDD0', display: 'flex' }}>
                            {/* Add SVG icon and text here */}
                        </div>
                        <div style={{ position: 'relative', width: '25%', height: '100%', backgroundColor: '#FFFDD0', display: 'flex' }}>
                            {/* Add SVG icon and text here */}
                        </div>
                        <div style={{ position: 'relative', width: '50%', height: '100%', backgroundColor: '#800020', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* Add text and logic for purchase here */}
                        </div>
                    </div>
                </div>
            ) : (
                <p>No product found</p>
            )}
        </div>
    );    
};

export default Index;
