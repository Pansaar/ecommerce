import React, { useState } from 'react';
import { useRouter } from 'next/router';
import userProfilePicState from '../../store/profilePic';
import useAuthStore from '../../store/user-auth';

const Index = () => {
  const router = useRouter();
  const { user: userParam } = router.query;

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [submit, setSubmit] = useState(false);
  const {isProfile, setIsProfile} = userProfilePicState()
  const {authenticatedUser, setAuthenticatedUser} = useAuthStore()

  // Function to handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Create a temporary URL for the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Inside your handleSubmit function
const handleSubmit = async (event) => {
  event.preventDefault();
  setIsProfile(true)
  setSubmit(true);

  try {
    const base64Image = await getBase64(selectedImage);

    const data = {
      imageBase64: base64Image
    };

    const response = await fetch('/api/updateProfilePic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set content type to JSON
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    });

    if (response.ok) {
      console.log('Profile picture updated successfully!');
      router.push(`/profile?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true })
    } else {
      console.error('Failed to update profile picture');
      setSubmit(false);
    }
  } catch (error) {
    console.error('Error updating profile picture:', error);
    setSubmit(false);
  }
};

const deletePic = () => {
  setSubmit(false)
  setIsProfile(false)
  router.push(`/profile?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true })
}

  // Function to convert selected file to base64
  const getBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <h1>Change Profile Picture</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '20px' }} />
        {imagePreviewUrl && (
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', boxShadow: '1px 1px 5px lightgrey', paddingBottom: '20px', marginBottom: '20px' }}>
            <h2>Preview:</h2>
            <img
              src={imagePreviewUrl}
              alt="Selected"
              style={{ width: '300px', height: '300px', borderRadius: '50%', display: 'block', margin: 'auto' }}
            />
          </div>
        )}
        <button type="submit" disabled={submit}>
        {submit ? <span>Submitting...</span>:<span>Submit</span>}</button>    
      </form>
      <button onClick={deletePic}>Delete</button>  
    </div>
  );
};

export default Index;
