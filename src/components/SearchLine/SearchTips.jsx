import React from 'react'
import useSearchStore from '../../stores/useSearchStore'
import { Box, Input, Icon, Flex, Button, HStack, SimpleGrid, IconButton, Text, VStack, Divider } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { BiHistory } from "react-icons/bi";

import { AiOutlineSearch } from "react-icons/ai";

const SearchTips = ({isHistory}) => {
    const updateQuery = useSearchStore((state) => state.updateQuery)
    const q = useSearchStore((state) => state.query)
    const history = 
        isHistory?
            q!==''?
                useSearchStore((state) => state.history).filter(str => str.startsWith(q))
                :
                useSearchStore((state) => state.history)
            :
            useSearchStore((state) => state.suggestions)
    const deleteHistory = useSearchStore((state) => state.deleteHistory)
    return (
    <>
        {history.length != 0 ?
            <>
            {isHistory&&<Flex justify={'space-between'} px={2}>
                <Text fontWeight={'bold'} fontSize={24} fontFamily={'Montserrat; sans-serif'}>История</Text>
                <Button onClick={()=>{deleteHistory(-1)}}>Очистить</Button>
            </Flex>}
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
                        onClick={(e)=>{updateQuery(query)}}
                    >
                        <Flex>
                            <Icon as={isHistory?BiHistory:AiOutlineSearch} boxSize={6} color={'gray.500'} me={2}/>
                            <Text >{query}</Text>
                        </Flex>
                        {isHistory&&<Icon key={index} as={CloseIcon} boxSize={3} color={'gray.300'} onClick={(e)=>{deleteHistory(index)}}/>}
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

export default SearchTips