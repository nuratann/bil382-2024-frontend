import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx'
import {ChakraProvider} from '@chakra-ui/react'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SearchLine from './components/SearchLine/SearchLine.jsx';
import theme from './ChakraThemeExtension.js'
import UserAgreementPage from "./pages/UserAgreement/UserAgreementPage.jsx";
import RegAndAuthModal from './components/RegAndAuthModal/RegAndAuthModal.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import TestSearchPage from './pages/TestSearchPage/TestSearchPage.jsx';
import BasketPage from './pages/BasketPage/BasketPage.jsx';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/test' element={<SearchLine/>}/>
                    <Route path='/agreement' element={<UserAgreementPage/>}/>
                    <Route path='/test_product' element={<ProductPage/>}/>
                    <Route path='/search' element={<TestSearchPage/>}/>
                    <Route path='/basket_page' element={<BasketPage/>}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
  )

}

export default App;