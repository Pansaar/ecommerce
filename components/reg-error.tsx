import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useRegErrorStore from './../store/reg-error';

const useRegError = () => {
  const { isVisible, setShowError, message, setMessage } = useRegErrorStore();

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '400px',
      height: '200px',
      display: isVisible ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <p className='text-center' style={{ marginTop: "10px", color: "red" }}>
        {message}
      </p>
      <button className='d-block mt-4' style={{ padding: "5px 20px 5px 20px", border: "solid 1px" }} onClick={() => setShowError(false)}>
        Confirm
      </button>
    </div>
  );
}

export default useRegError;
