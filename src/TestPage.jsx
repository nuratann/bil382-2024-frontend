import { Text } from '@chakra-ui/react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestPage = () => {
    const notifySuccess = () => {
        toast.success("Success notification!");
      };
    
      const notifyError = () => {
        toast.error("Error notification!");
      };
    
      const notifyInfo = () => {
        toast.info("Info notification!");
      };
    
      const notifyWarning = () => {
        toast.warn("Warning notification!");
      };
    
      return (
        <div>
          <h1>React Toastify Example</h1>
          <button onClick={notifySuccess}>Show Success Toast</button>
          <button onClick={notifyError}>Show Error Toast</button>
          <button onClick={notifyInfo}>Show Info Toast</button>
          <button onClick={notifyWarning}>Show Warning Toast</button>
          <ToastContainer />
        </div>
      );
}

export default TestPage