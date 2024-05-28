import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCheckMark from './components/AnimatedCheckMark/AnimatedCheckMark';
import { uploadFile } from './api/MediaService';

const TestPage = () => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const productId = '3f4e5d6c-7e8d-9c0b-1f2a'; // Замените на ваш идентификатор продукта
    const res = await uploadFile(file, productId);
    console.log(res)
  };

  return (
    <Box>
      <input type="file" onChange={handleFileChange} />
      <img src='http://localhost:8081/api/v1/media/photo/3f4e5d6c-7e8d-9c0b-1f2a/c3d8b691-a566-4503-a4f1-3141a61d2e6d.jpg' />
    </Box>
  );
}

export default TestPage