import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ProductCard from './components/ProductCard/ProductCard.jsx';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<ProductCard/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  )

}

export default App;