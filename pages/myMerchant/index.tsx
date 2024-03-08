import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import useAuthStore from '../../store/user-auth';

const index = () => {

  const router = useRouter()
  const { user: userParam } = router.query;
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { authenticatedUser } = useAuthStore();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

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
      setSubmitting(true);
  
      try {
        const base64Image = await getBase64(selectedImage);
  
        const data = {
          imageBase64: base64Image,
          name: productName,
          price: productPrice,
          description: productDescription,
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '20px' }} />
        {imagePreviewUrl && (
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', boxShadow: '1px 1px 5px lightgrey', paddingBottom: '20px', marginBottom: '20px' }}>
            <h2>Preview:</h2>
            <img
              src={imagePreviewUrl}
              alt="Selected"
              style={{ width: '300px', height: '300px', display: 'block', margin: 'auto' }}
            />
          </div>
        )}
        <div className="input-container" style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ paddingRight: '10px' }}>Product Name:</h3>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="input-container" style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ paddingRight: '10px' }}>Price:</h3>
          <input
            type="text"
            placeholder="Enter product price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="input-container" style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ paddingRight: '10px' }}>Description:</h3>
          <input
            type="text"
            placeholder="Enter product description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? <span>Submitting...</span> : <span>Submit</span>}
        </button>
      </form>
    </div>
  );
};

export default index;