import Breadcrumb from '../../components/ProductHeader/Breadcrumb/Breadcrumb'
import ProductHeader from '../../components/ProductHeader/ProductHeader'
import ProductGallery from '../../components/ProductGallery/ProductGallery'



function HomePage(){
    const productPageBreadcrumbItems = [
        { text: 'Главная', href: '/' },
        { text: 'Категории', href: '/categories' },
        { text: 'Кофе и чай', href: '/categories/coffee-tea' },
        { text: 'Кофе', href: '/categories/coffee-tea/coffee' }
      ];
      const imageUrls = [
        "https://ir-3.ozone.ru/s3/multimedia-b/wc1000/6064306271.jpg",
        "https://ir-3.ozone.ru/s3/multimedia-e/wc1000/6064306274.jpg"
      ];
    return(
        <>
            <Header />
            <Navbar />
            <Breadcrumb items={productPageBreadcrumbItems}/>
            <ProductHeader/>
            <ProductGallery images={imageUrls}/>
        </>
    )
}

export default HomePage;