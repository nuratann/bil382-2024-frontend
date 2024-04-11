import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SearchLine from './components/SearchLine/SearchLine.jsx';
import theme from './ChakraThemeExtension.js'
import RegAndAuthModal from './components/RegAndAuthModal/RegAndAuthModal.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<RegAndAuthModal/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  )

}

export default App;