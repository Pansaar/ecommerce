import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
    const [image, setImage] = useState<string>('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [info, setInfo] = useState<string>('');
    const [verify, setVerify] = useState(false)
    const [displayVerify, setDisplayVerify] = useState(false)
    const [displayImage, setDisplayImage] = useState(false)

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
            setDisplayImage(true)
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

                if(res.status === 200) {
                    setVerify(true)
                }

                const data = res.data;
                console.log(data);
                setInfo(JSON.stringify(data))
                setDisplayVerify(true)

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
                <div style={{display: 'flex', justifyContent: 'center', border: 'solid 1px lightGrey', margin: 'auto', width: '600px', boxShadow: '1px 1px 2px lightGrey', height: '340px', marginTop: '20px'}}>
                {displayImage ? <img src={image} height={300} alt="Preview" style={{margin: 'auto auto'}}/>:<h1 style={{fontWeight: '200', opacity: '0.5', textAlign: 'center', alignContent: 'center', color: 'grey'}}>Choose Slip to Verify</h1>}
                </div>
                <input type='file' id='file' name='file' onChange={onImageChange} style={{marginTop: '30px'}}/><br />
                <button type='submit' style={{marginTop: '10px'}}>Submit</button>
            </form>
            <div style={{display: displayVerify ? 'block': 'none'}}>
            <h3 style={{fontWeight: '200'}}>Information</h3>
            <div style={{ border: 'solid 1px', display: 'block', margin: 'auto', textAlign: 'center' }}>
                <p style={{ fontSize: '10px', textAlign: 'left', display: 'inline-block', maxWidth: '100%', paddingLeft: '5px', paddingRight: '5px' }}>{info}</p>
            </div>
            {verify ? <p style={{color: '#800020'}}>This slip is authentic</p> : <p style={{color: '#800020'}}>This slip is not authentic</p>}
        </div>
        </div>
    );
};

export default Index;
