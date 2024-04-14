import React, {useRef, useEffect, useState} from 'react'
import { Input, useDisclosure } from '@chakra-ui/react'
import SearchLine from './SearchLine'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
} from '@chakra-ui/react'
import RecommendationBlock from '../RecomendationBlock/RecomendationBlock'
import useSearchStore from '../../stores/useSearchStrore'
import SearchHistory from './SearchHistory'

const Search = () => {
    const searchState = useSearchStore((state) => state)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const searchRef = useRef(null);
    const [inputWidth, setInputWidth] = useState('auto');
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0, height: 40 });

    const updateInputWidth = () => {

        if (searchRef.current) {
          const width = searchRef.current.offsetWidth+12;
          setInputWidth(`${width}px`);
          const rect = searchRef.current.getBoundingClientRect();
            setModalPosition({
            top: rect.top-70,
            left: rect.left-6,
            height: rect.height
      });
        }
      };

      useEffect(() => {
        updateInputWidth();
        window.addEventListener('resize', updateInputWidth);
    
        return () => {
          window.removeEventListener('resize', updateInputWidth);
        };
      }, []);

    return (
        <>
            <SearchLine inputClick={onOpen} searchRef={searchRef}/>
            <Modal 
                isOpen={isOpen} 
                onClose={onClose} 
                trapFocus={false}
                scrollBehavior={'inside'}
            >
                <ModalOverlay backdropFilter='blur(5px)'/>
                <ModalContent 
                    size={'lg'} 
                    maxW={inputWidth}
                    position="fixed"
                    top={modalPosition.top}
                    left={modalPosition.left}
                    zIndex={1}
                    rounded={10}
                    p={2}
                >
                    <ModalBody 
                        mt={`${modalPosition.height+6}px`}
                        p={0}
                        sx={{
                            '&::-webkit-scrollbar': {
                              width: '16px',
                              borderRadius: '8px',
                              backgroundColor: `rgba(0, 0, 0, 0.05)`,
                            },
                            '&::-webkit-scrollbar-thumb': {
                              borderRadius: '8px',
                              backgroundColor: `rgba(0, 0, 0, 0.05)`,
                            },
                          }}
                    >
                        {
                            searchState.query===''?
                            <>
                                <SearchHistory/>
                                <Text fontWeight={'bold'} fontSize={24} p={2} fontFamily={'Montserrat; sans-serif'}>Рекомендуем для вас</Text>
                                <RecommendationBlock  gridColumns={3}/>
                            </>                            
                            :
                            <></>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Search