import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import useAuthStore from '../../store/user-auth';
import TopNav1 from '../../components/top-nav1';
import LeftNav from '../../components/left-nav';

const Index = () => {

  const router = useRouter()
  const { user: userParam } = router.query;
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { authenticatedUser } = useAuthStore();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAmount, setProductAmount] = useState('')
  const [productCategory, setProductCategory] = useState('')

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(parseFloat(productAmount)%1 !== 0) {
      document.getElementById('amountError').style.display = 'block'
    } else if(!parseFloat(productPrice).toFixed(2)) {
      document.getElementById('priceError').style.display = 'block'
    } else if(parseFloat(productAmount)%1 === 0 && parseFloat(productPrice).toFixed(2)) {
    setSubmitting(true);

    try {
      const base64Image = await getBase64(selectedImage);

  
      const data = {
        imageBase64: base64Image,
        name: productName,
        price: productPrice,
        description: productDescription,
        amount: productAmount,
        category: productCategory
      };
  
      const response = await fetch(`/api/merchantPost?user=${encodeURIComponent(userParam as string)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Product posted successfully!');
        router.push(`/home?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true });
      } else {
        console.error('Failed to post product for sale');
      }
    } catch (error) {
      console.error('Error posting product for sale:', error);
    } finally {
      setSubmitting(false);
    }
  };
}

  return (
    <div>
      <TopNav1 />
      <LeftNav />
      <form onSubmit={handleSubmit}>
        <div style={{ height: '500px', width: '100%', overflow: 'hidden', position: 'relative', boxShadow: '1px 1px 5px lightgrey'}}>
        <h2 style={{margin: '20px 0px 0px 20px'}}>Preview:</h2>
        {imagePreviewUrl && (
          <div style={{ marginBottom: '20px', paddingTop: '50px' }}>
            <img
              src={imagePreviewUrl}
              alt="Selected"
              style={{ width: '300px', height: '300px', display: 'block', margin: 'auto' }}
            />
          </div>
        )}
        </div>
        <input id='uploadMyMerchant' type="file" accept="image/*" onChange={handleImageChange} style={{ margin: '20px 0px 20px 10px' }} />
        <div style={{ marginLeft: '10px'}}>
        <div className="input-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'white' }}>
          <p style={{ paddingRight: '10px', marginTop: '10px'}}>Product Name:</p>
          <input
            id='inputProdName'
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            maxLength={255}
            style={{ border: 'none', outline: 'none', borderBottom: '1px solid lightgray' }}
          />
      </div>
      <div className="input-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'white' }}>
        <label htmlFor="category" style={{ paddingRight: '10px', marginTop: '10px', marginBottom: '10px' }}>Category</label>
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          style={{ border: 'none', outline: 'none', borderBottom: '1px solid lightgray' }}
        >
          <option id='inputSelectCategory' value="">Select a category...</option>
          <option id='electronics' value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="food">Food</option>
          <option value="beauty">Beauty</option>
        </select>
      </div>
        <div className="input-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'white' }}>
          <p style={{ paddingRight: '10px', marginTop: '10px' }}>Price:</p>
          <input
            id='inputPrice'
            type="number"
            placeholder="Enter Product Price"
            step="0.01" 
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            maxLength={255}
            min='0'
            style={{ border: 'none', outline: 'none', borderBottom: '1px solid lightgray' }}
          />
        </div>
        <div className="input-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'white' }}>
          <p style={{ paddingRight: '10px', marginTop: '10px' }}>Amount:</p>
          <input
            id='inputAmount'
            type="number"
            placeholder="Enter product amount"
            value={productAmount}
            onChange={(e) => setProductAmount(e.target.value)}
            maxLength={255}
            min='0'
            style={{ border: 'none', outline: 'none', borderBottom: '1px solid lightgray' }}
          />
        </div>
        <div className="input-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'white' }}>
          <p style={{ paddingRight: '10px', marginTop: '10px' }}>Description:</p>
          <input
            id='inputDescription'
            type="text"
            placeholder="Enter product description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            maxLength={255}
            style={{ border: 'none', outline: 'none', borderBottom: '1px solid lightgray' }}
          />
        </div>
        <button type="submit" disabled={submitting} style={{margin: '20px 10px 0px 0px', padding: '2px 20px 2px 20px', borderRadius: '5px'}}>
          {submitting ? <span>Submitting...</span> : <span id='submit'>Submit</span>}
        </button>
        </div>
      </form>
      <button style={{borderRadius: '5px', padding: '2px 20px 2px 20px', margin: '20px 0px 10px 10px'}} onClick={() => router.push(`/viewMyMerchant?user=${encodeURIComponent(userParam as string)}`)}>My Products</button>
      
      <div id = 'priceError' style={{
            display: 'none',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            fontWeight: '200'
        }}>
        <h3>Please, enter number with no more than two-digit decimals for price</h3>
        <button id = 'closePriceError' onClick={() => document.getElementById('priceError').style.display = 'none'}>Ok</button>
        </div>
      <div id="amountError" style={{
            display: 'none',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
           fontWeight: '200'
        }}>
        <h3>Please enter an integer number for the amount</h3>
        <button id = 'closeAmountError' onClick={() => document.getElementById('amountError').style.display = 'none'}>Ok</button>
</div>
    </div>
  );
};

export default Index;
