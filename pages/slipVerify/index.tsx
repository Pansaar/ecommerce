import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
    const [image, setImage] = useState<string>('');
    const [imageFile, setImageFile] = useState<File | null>(null);

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                const imageDataUrl = reader.result as string;
                setImage(imageDataUrl);
            };

            reader.readAsDataURL(file);
            setImageFile(file);
        }
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (imageFile) {
            const formData = new FormData();
            formData.append('file', imageFile);

            try {
                const res = await axios.post('https://developer.easyslip.com/api/v1/verify', formData, {
                    headers: {
                        'Authorization': 'Bearer dc5adb9e-12df-461a-8b23-621c321f1120',
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const data = res.data;
                console.log(data);

            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.error('No file selected');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='file' id='file' name='file' onChange={onImageChange} />
                <img src={image} height={300} alt="Preview" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Index;
