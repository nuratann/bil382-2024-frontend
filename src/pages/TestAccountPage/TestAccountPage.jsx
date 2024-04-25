import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Flex, Text } from '@chakra-ui/react'
import useUserStore from '../../stores/useUserStore'
const TestAccountPage = () => {
    const user = useUserStore(state => state.user)
    return (
        <>
            <Header />
            <Navbar />
            <Flex my={8} justify={'center'} w={'100%'} >
                <Text maxW={'80%'}>{JSON.stringify(user)}</Text>
            </Flex>

            <Footer />
        </>
    )
}

export default TestAccountPage;