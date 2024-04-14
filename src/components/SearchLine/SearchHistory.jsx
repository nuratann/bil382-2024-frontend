import React from 'react'
import useSearchStore from '../../stores/useSearchStrore'
import { Box, Input, Icon, Flex, Button, HStack, SimpleGrid, IconButton, Text, VStack, Divider } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { BiHistory } from "react-icons/bi";

const SearchHistory = () => {
    const history = useSearchStore((state) => state.history)
    const deleteHistory = useSearchStore((state) => state.deleteHistory)
    return (
    <>
        {history.length != 0 ?
            <>
            <Flex justify={'space-between'} px={2}>
                <Text fontWeight={'bold'} fontSize={24} fontFamily={'Montserrat; sans-serif'}>История</Text>
                <Button onClick={()=>{deleteHistory(-1)}}>Очистить</Button>
            </Flex>
            <VStack spacing={0} divider={<Divider/>} mt={2}>
                {history.map((query, index) => (
                    <Flex  
                        p={2} 
                        key={index} 
                        w={'100%'} 
                        justify={'space-between'} 
                        align={'center'} 
                        textAlign={'start'} 
                        _hover={
                            {
                                bg:'gray.200',
                                cursor:'pointer',
                                color:'brand.hoverblue'
                            }
                        }
                    >
                        <Flex>
                            <Icon as={BiHistory} boxSize={6} color={'gray.500'} me={2}/>
                            <Text >{query}</Text>
                        </Flex>
                        <Icon key={index} as={CloseIcon} boxSize={4} color={'gray.500'} onClick={(e)=>{deleteHistory(index)}}/>
                    </Flex>
                ))}
            </VStack>
            </>
            :
            <></>
        }

    </>
    )
}

export default SearchHistory