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
    const [inputValue, setInputValue] = useState(1); 
    const productIdParam = router.query.productId
    const userParam = router.query.user
    const [isAmountSubmitted, setIsAmountSubmitted] = useState(false);
    const [qrCodeDataURL, setQrCodeDataURL] = useState(null);
    
    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/api/productId?user=${userParam}&productId=${productIdParam}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        if (productIdParam) {
            fetchProduct();
            
        }
    }, [productIdParam]);

    useEffect(() => {
        const fetchProductAmount = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/api/fetchProductViewAmount?user=${userParam}&productId=${productIdParam}`);
                await setInputValue(response.data.cartItemAmount.prodAmount)
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching product amount:', error);
                setIsLoading(false);
            }
        };

        if (productIdParam) {
            fetchProductAmount();
        }
    }, [userParam, productIdParam]);

    async function addToCart(event) {
        setIsAmountSubmitted(true);
        event.preventDefault();
        
        const amount = parseInt(event.target.elements.amount.value); 
        if (isNaN(amount) || amount <= 0 || amount > products.amount) {
            console.error('Invalid amount');
            setIsAmountSubmitted(false);
            document.getElementById('amountError').style.display = 'flex';
            return;
        }
        try {
            await axios.post(`/api/shoppingCart?user=${userParam}&productId=${productIdParam}`, {
                amount: amount
            });
            console.log('Product added to cart successfully');
            document.getElementById('prodAmount').style.display = 'none';
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
        setIsAmountSubmitted(false);
    }

    const handleInputChange = (event) => {
        setInputValue(parseInt(event.target.value));
    };

    async function purchaseProduct() {
        try {
            const response = await axios.post('/api/generatePayload', {
                amount: products.price * inputValue
            });
            setQrCodeDataURL(response.data.qrCodeDataURL);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    }

    return (
        <div>
            <TopNav1 />
            <TopNav2 />
            <LeftNav />
            {isLoading ? (
                <p>Loading...</p>
            ) : products ? ( 
                <div style={{paddingBottom: '60px'}}>
                    <div style={{boxShadow: '2px 2px 2px lightGrey'}}>
                        <img src={products.image} style={{width: '800px', height: '500px', margin: 'auto', display: 'block'}}/>
                    </div>
                    <p style={{backgroundColor: '#800020', color: 'white', padding:'10px', margin: '0', textAlign: 'center'}}>Product Commercials</p>
                    <div style={{backgroundColor: 'beige', border: 'solid 1px beige'}}>
                        <div style={{backgroundColor: 'white', paddingBottom: '10px'}}>
                            <p style={{color: '#800020', marginLeft: '10px', paddingTop: '10px'}}>฿<span style={{fontSize: '20px'}}>{products.price}</span></p>
                            <p style={{marginLeft: '10px'}}>{products.name}</p>
                            <p style={{marginLeft: '10px'}}>Remaining: {products.amount}</p>
                        </div>
                        <div style={{padding: '10px 0px', backgroundColor: 'white', marginTop: '20px'}}>
                            <div style={{borderBottom: 'solid 1px lightGrey', display: 'flex', justifyContent: 'space-between'}}>
                                <p style={{marginLeft: '10px'}}>Category</p>
                                <p style={{color: 'grey'}}>{products.category} <span style={{marginRight:'10px'}}>{`>`}</span></p>
                            </div>
                            <p style={{marginLeft: '10px', paddingTop: '20px'}}>Description:</p>
                            <p style={{color: 'grey', marginLeft: '10px', marginTop: '-10px'}}>{products.description}</p>
                            <p style={{marginLeft: '10px'}}>Last updated: {products.updatedAt}</p>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '60px', position: 'fixed', bottom: '0', justifyContent: 'space-between', display: 'flex', cursor: 'pointer' }}>
                        <div style={{ position: 'relative', width: '25%', height: '100%', backgroundColor: '#FFFDD0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => console.log('Contact Seller')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={25} fill='#800020'>
                                <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                            </svg>
                            <div style={{ position: 'absolute', top: '5px', bottom: '5px', right: '0', width: '1px', backgroundColor: 'lightGrey' }}></div>
                        </div>
                        <div style={{ position: 'relative', width: '25%', height: '100%', backgroundColor: '#FFFDD0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => document.getElementById('prodAmount').style.display = 'flex'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={30} fill='#800020'>
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg>
                        </div>
                        <div style={{ position: 'relative', width: '50%', height: '100%', backgroundColor: '#800020', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={purchaseProduct}>
                            <p style={{ color: 'white', textAlign: 'center', margin: '20px' }}>Purchase<br />{products.price * inputValue} THB</p>
                        </div>
                    </div>
                    <div id='prodAmount' style={{ display: 'flex', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', width: '300px', height: '200px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 5px grey', textAlign: 'center', padding: '20px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={15} style={{ fill: 'grey', position: 'absolute', top: '15px', right: '15px', cursor: 'pointer' }} onClick={() => document.getElementById('prodAmount').style.display = 'none'}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        <form onSubmit={addToCart} style={{ width: '100%' }}>
                            <input name="amount" placeholder="Enter quantity" type="number" required onChange={handleInputChange} value={inputValue} disabled={isAmountSubmitted} style={{ marginBottom: '10px', width: '80%', padding: '10px' }} />
                            <p id='amountError' style={{ color: 'red', display: 'none', marginLeft: '10%' }}>Invalid amount</p>
                            <button type="submit" disabled={isAmountSubmitted} style={{ width: '80%', padding: '10px', backgroundColor: '#800020', color: 'white', border: 'none', borderRadius: '5px' }}>
                                {isAmountSubmitted ? 'Adding to cart...' : 'Add to cart'}
                            </button>
                        </form>
                    </div>
                    <div id='purchaseDiv'>
                {qrCodeDataURL && <img src={qrCodeDataURL} alt="QR Code" />}
            </div>
                </div>
                
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
};

export default Index;
