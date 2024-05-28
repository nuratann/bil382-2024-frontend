import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import useUserStore from '../../stores/useUserStore';
import { Outlet, Route, Routes } from 'react-router-dom';
import ProfileMainSub from '../../components/Profile/ProfileSubPages/ProfileMainSub';
import { Box, Flex, Text } from '@chakra-ui/react';
import Bonuses from '../../components/Profile/ProfileSubPages/BonusAndPoints';
import PayMethods from '../../components/Profile/ProfileSubPages/PayMethods';
import Chat from '../../components/Profile/OrdersSubComp/Chat';
import PersonalAccount from '../../components/Profile/PersonalAccount';
import OrdersComponent from '../../components/Profile/ProfileSubPages/OrdersComponent';
import ReturnsComponents from '../../components/Profile/ProfileSubPages/ReturnsComponent';
import ElectronicReceipts from '../../components/Profile/ProfileSubPages/ElectronicReceipts';
import ReviewsComponent from '../../components/Profile/ProfileSubPages/ReviewsComponent';
import SellerProfile from '../../components/Profile/ProfileSubPages/SellerProfile';
import MyProducts from '../../components/Profile/Seller/MyProducts';
import AddProduct from '../../components/Profile/Seller/AddProduct';
import ProfileMenu from '../../components/Profile/ProfileMenu';
import { useLocation } from 'react-router-dom';
import RegAndAuthModal from '../../components/RegAndAuthModal/RegAndAuthModal';


function ProfilePg() {
    const user = useUserStore(state=>state.user)
    const location = useLocation();
    return (
        <>

            <Header />
            <Navbar />
            {user.isAuth ?
                <Flex bg={'gray.50'}>
                    <ProfileMenu active={location.pathname} />
                    <Box
                        height="max-content"
                        p={2}
                        m={6}
                        ms={0}
                        w={"130vh"}
                        borderRadius="18px"
                        bgColor="white"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                    >

                        <Routes>
                            <Route path={`main`} element={<ProfileMainSub />} />
                            <Route path={`bonuses`} element={<Bonuses />} />
                            <Route path={`pay-methods`} element={<PayMethods />} />
                            <Route path={`chat`} element={<Chat />} />
                            <Route path={`personal-account`} element={<PersonalAccount />} />
                            <Route path={`my-orders`} element={<OrdersComponent />} />
                            <Route path={`my-returns`} element={<ReturnsComponents />} />
                            <Route path={`electronic-receipts`} element={<ElectronicReceipts />} />
                            <Route path={`my-reviews`} element={<ReviewsComponent />} />
                            <Route path={`seller-profile`} element={<SellerProfile />} />
                            <Route path={`my-products`} element={<MyProducts />} />
                            <Route path={`add-product`} element={<AddProduct />} />
                        </Routes>


                    </Box>
                </Flex>
                :
                <>
                    <Flex w={'100%'} h={'40vh'} justifyContent={'center'} alignItems={'center'} bg={'gray.50'}>
                        <Flex
                            w={"40vh"}
                            h={'30vh'}
                            borderRadius="18px"
                            bgColor="white"
                            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                            flexDirection={'column'}
                            justifyContent={'center'} alignItems={'center'} textAlign={'center'}
                        >
                            <Text mb={4} fontSize={18} fontWeight={500}>Для входа в личный кабинет требуется </Text>
                            <RegAndAuthModal />
                        </Flex>
                    </Flex>
                </>}
            <Footer />
        </>
    )
}

export default ProfilePg;
