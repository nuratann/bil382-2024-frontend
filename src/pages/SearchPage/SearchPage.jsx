import React from 'react'

import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MainSearchBlock from '../../components/SearchPageComponents/MainSearchBlock';



function SearchPage() {

    return (
        <>  <Header />
            <Navbar />
            <MainSearchBlock height="max-content" />
            <Footer />
        </>
    )
}

export default SearchPage;