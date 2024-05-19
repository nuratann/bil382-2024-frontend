import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SearchLine from './components/SearchLine/SearchLine.jsx';
import theme from './ChakraThemeExtension.js'
import UserAgreementPage from "./pages/UserAgreement/UserAgreementPage.jsx";
import RegAndAuthModal from './components/RegAndAuthModal/RegAndAuthModal.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import TestSearchPage from './pages/TestSearchPage/TestSearchPage.jsx';
import BasketPage from './pages/BasketPage/BasketPage.jsx';

import TestAccountPage from './pages/TestAccountPage/TestAccountPage.jsx';

import SearchPage from './pages/SearchPage/SearchPage.jsx';
import Favorites from './pages/FavoritesPage/FavoritesPage.jsx';
import UserProfile from './pages/UserProfile/UserProfile.jsx';

import ProfilePg from './pages/ProfilePage/ProfilePage.jsx';
import AddCardPage from './pages/ProfilePage/AddCardPage/AddCardPage.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';
import TestPage from './TestPage.jsx'



function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>


                    <Route path='/' element={<HomePage />} />
                    {/* <Route path='/test' element={<SearchLine />} /> */}
                    <Route path='/agreement' element={<UserAgreementPage />} />
                    <Route path="/product/:productId" element={<ProductPage />} />
                    {/* <Route path='/product' element={<ProductPage />} /> */}
                    <Route path='/test_search' element={<TestSearchPage />} />
                    <Route path='/cart' element={<BasketPage />} />
                    <Route path='/account' element={<TestAccountPage />} />

                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/profile' element={<ProfilePg />} />
                    <Route path='/add_card' element={<AddCardPage />} />
                    <Route path='/categories/:name' element={<CategoryPage />} />
                    <Route path='/test' element={<TestPage />} />



                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )

}

export default App;