import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import TopNav1 from '../../components/top-nav1';
import { useRouter } from 'next/router';
import TopNav2 from '../../components/top-nav2';
import LeftNav from '../../components/left-nav';

interface Product {
    category: string | number | readonly string[];
    image: string;
    price: string;
    name: string;
    description: string;
    amount: number;
}

const Index = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product | null>(null);
    const [editableFields, setEditableFields] = useState<Record<string, boolean>>({});
    const productIdParam = router.query.productId;
    const userParam = router.query.user;
    const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            Object.values(inputRefs.current).forEach((ref) => {
                if (ref && !ref.contains(event.target as Node)) {
                    setEditableFields({});
                }
            });
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

    const handleSave = async () => {
        try {
            const response = await axios.post(`/api/editMyMerchant?user=${userParam}&productId=${productIdParam}`, {
                name: products.name,
                category: products.category,
                price: products.price,
                description: products.description,
                amount: products.amount,
            });

            console.log('Product updated successfully:', response.data);

            setEditableFields({});
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/api/deleteEditMyMerchant?user=${userParam}&productId=${productIdParam}`);
            console.log('Product deleted successfully:', response.data);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    useEffect(() => {
        console.log(products);
    }, [products]);
    

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
                                            autoFocus
                                            ref={(ref: HTMLInputElement) => {
                                                if (ref) {
                                                    inputRefs.current['price'] = ref;
                                                }
                                            }}                                            
                                        />
                                    ) : (
                                        <span onClick={() => handleEdit('price')}>
                                            ฿<span style={{ fontSize: '20px' }}>{products.price}</span>
                                        </span>
                                    )}
                                </p>
                                <p style={{ color: '#800020', marginLeft: '10px', paddingTop: '10px' }}>
                                    {editableFields.name ? (
                                        <input
                                            type="text"
                                            value={products.name}
                                            onChange={(event) => handleFieldChange(event, 'name')}
                                            autoFocus
                                            ref={(ref: HTMLInputElement) => {
                                                if (ref) {
                                                    inputRefs.current['name'] = ref;
                                                }
                                            }}     
                                        />
                                    ) : (
                                        <span onClick={() => handleEdit('name')}>
                                            {products.name}
                                        </span>
                                    )}
                                </p>
                                <p style={{ color: '#800020', marginLeft: '10px', paddingTop: '10px' }}>
                                    {editableFields.amount ? (
                                        <input
                                            type="text"
                                            value={products.amount.toString()}
                                            onChange={(event) => handleFieldChange(event, 'amount')}
                                            autoFocus
                                            ref={(ref) => {
                                                if (ref) {
                                                    inputRefs.current['amount'] = ref;
                                                }
                                            }}     
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
                                            autoFocus
                                            ref={(ref) => {
                                                if (ref) {
                                                    inputRefs.current['category'] = ref;
                                                }
                                            }}     
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
                                            autoFocus
                                            ref={(ref) => {
                                                if (ref) {
                                                    inputRefs.current['description'] = ref;
                                                }
                                            }}     
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
    <div style={{ backgroundColor: '#FFFDD0', position: 'absolute', left: '0', width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={async () => { await handleDelete(); router.push(`/viewMyMerchant?user=${userParam}`)}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} style={{fill: '#800020'}}><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
    </div>
        <div>
        <div style={{ backgroundColor: '#800020', position: 'absolute', right: '0', width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleSave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} style={{ fill: 'white' }}>
                <path d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/>
            </svg>
        </div>
            </div>
</div>

                </div>
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
}

export default Index;