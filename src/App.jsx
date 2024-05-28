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

import ProfilePg from './pages/ProfilePage/ProfilePage.jsx';
import AddCardPage from './pages/ProfilePage/AddCardPage/AddCardPage.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';
import TestPage from './TestPage.jsx'
import { loadStripe } from '@stripe/stripe-js';
import PaymentPage from './pages/PaymentPage/PaymentPage.jsx';

import AdminPage from './pages/AdminPage/AdminPage.jsx';
import AdminPageUsers from './pages/AdminPage/AdminPageUsers.jsx';
import AdminPageCatalog from './pages/AdminPage/AdminPageCatalog.jsx';

const stripePromise = loadStripe('pk_test_51PJeSX08MXO6we99KRwkspzVIUmINvrHaVYHTxivEOzdqHxC1CNZrPKImHi4iUfbYFwEfVGQ91FOd7SMBSssnlKZ00Q0mVeAFH');


function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>


                    <Route path='/' element={<HomePage />} />
                    <Route path='/agreement' element={<UserAgreementPage />} />
                    <Route path="/product/:productId" element={<ProductPage />} />
                    <Route path='/test_search' element={<TestSearchPage />} />
                    <Route path='/cart' element={<BasketPage />} />
                    <Route path='/account' element={<TestAccountPage />} />

                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/profile' element={<ProfilePg />} />
                    <Route path='/add_card' element={<AddCardPage />} />
                    <Route path='/categories/:name' element={<CategoryPage />} />
                    <Route path='/test' element={<TestPage />} />
                    <Route path='/checkout' element={<PaymentPage/>} />

                    <Route path='/admin' element={<AdminPage/>} />
                    <Route path='/admin/users' element={<AdminPageUsers/>} />
                    <Route path='/admin/catalog' element={<AdminPageCatalog/>} />
                    <Route path='/admin/orders' element={<AdminPageCatalog/>} />
                    <Route path='/admin/returns' element={<AdminPageCatalog/>} />
                    <Route path='/admin/comments' element={<AdminPageCatalog/>} />
                    <Route path='/admin/settings' element={<AdminPageCatalog/>} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )

}

export default App;