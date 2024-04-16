import React from 'react';
import { Grid, Box, Text, Icon, VStack, Flex, Image, Link } from '@chakra-ui/react';
import { FaStar, FaInfoCircle } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { SiTrustedshops } from "react-icons/si";
import { PiCrownSimpleFill } from "react-icons/pi";

const StoreInfoBlock = () => {
  return (
    
    <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4} border={"1px"} borderColor={"gray.200"}  borderRadius="md" w={"800px"} h={"125px"}  mb={"20px"}>
      <Flex m={"auto 0"}>
        <Image 
        boxSize={"72px"} 
        src='https://cdn1.ozonusercontent.com/s3/marketing-api/banners/Zp/4a/wc100/Zp4a7uzxqnxoND73LMpZD9EmuZIT6xqR.png' 
        borderRadius={"full"}
        mr={"10px"}/>
        <Box textAlign="center" justifyContent={"space-between"} m={"auto 0"}>
            <Flex>
                <Icon as={AiOutlineShop} boxSize={6} mr={"10px"}/>
                <Link fontSize="sm" src="#">OOO "Фаворит"</Link>
            </Flex>
            <Text fontSize="xs" color="gray.500">Перейти в магазин</Text>
        </Box>
      </Flex>
      
      <VStack textAlign="center" m={"auto 0"}>
        <Flex>
            <Icon as={FaStar} color="yellow.400" mr={"10px"}/>
            <Text fontSize="sm">4,7 рейтинг товаров</Text>
        </Flex>
        <Text fontSize="xs" color="gray.500">Доставка и сервис Buyers</Text>
      </VStack>
      <VStack textAlign="center" m={"auto 0"}>
        <Flex>
          <Icon as={MdSecurity} color="green.400" mr={"10px"}/>
          <Text fontSize="sm">Безопасная оплата онлайн</Text>
        </Flex>
        <Flex>
          <Icon as={SiTrustedshops} />
          <Text fontSize="xs" color="gray.500">Товар надлежащего качества обмену и возврату не подлежит</Text>  
        </Flex>
        
      </VStack>
    </Grid>
  );
};

export default StoreInfoBlock;
