import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCheckMark from './components/AnimatedCheckMark/AnimatedCheckMark';

const TestPage = () => {
    
    
      return (
        <Box boxSize={12}>
            <AnimatedCheckMark type="success"/>
        </Box>
      );
}

export default TestPage