import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import userProfilePicState from '../../store/profilePic';
import useAuthStore from '../../store/user-auth';

const Index = () => {
  const router = useRouter();
  const { user: userParam } = router.query;

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { setIsProfile } = userProfilePicState();
  const { authenticatedUser } = useAuthStore();

useEffect(() => {
  const fetchData = async () => {
    try {
      if (userParam) {
        const response = await fetch(`/api/fetchProfilePic?user=${encodeURIComponent(userParam as string)}`);
        if (response.ok) {
          const data = await response.json();
          if (data.profilePic !== "") {
            setIsProfile(true);
            setImagePreviewUrl(data.profilePic);
          }
        } else {
          console.error('Failed to fetch profile picture');
        }
      }
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };

  fetchData();
}, [userParam, setIsProfile]);

// Inside the handleSubmit function

const handleSubmit = async (event) => {
  event.preventDefault();
  setSubmitting(true);

  try {
    const base64Image = await getBase64(selectedImage);

    const data = {
      imageBase64: base64Image
    };

    const response = await fetch(`/api/updateProfilePic?user=${encodeURIComponent(userParam as string)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Profile picture updated successfully!');
      router.push(`/profile?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true });
    } else {
      console.error('Failed to update profile picture');
    }
  } catch (error) {
    console.error('Error updating profile picture:', error);
  } finally {
    setSubmitting(false);
  }
};

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const deletePic = () => {
    setIsProfile(false);
    router.push(`/profile?user=${encodeURIComponent(authenticatedUser)}`, undefined, { shallow: true });
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <title>Edit User Profile</title>
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
        <button type="submit" disabled={submitting}>
          {submitting ? <span>Submitting...</span> : <span>Submit</span>}
        </button>
      </form>
      <button onClick={deletePic}>Delete</button>
    </div>
  );
};

export default Index;
