import React, {useRef, useEffect, useState} from 'react'
import { Input, VStack, useDisclosure } from '@chakra-ui/react'
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
import useSearchStore from '../../stores/useSearchStore'
import SearchTips from './SearchTips'

const Search = () => {
    const searchState = useSearchStore((state) => state)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const searchRef = useRef(null);

    //почему я не использую onOpen, onClose? визуальный баг при закрытии модального окна поиска, вот почему
    const [inputWidth, setInputWidth] = useState('auto');
    
    const [isInput, setInput] = useState(false)
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
            <SearchLine inputClick={()=>{onOpen();setInput(true);}} searchRef={searchRef} zindex={isInput?2000:1}/>
            <Modal 
                isOpen={isOpen} 
                onClose={()=>{
                        onClose();
                        //таймаут чтобы модалка успела закрыться перед тем как строка поиска сменит zIndex
                        setTimeout(() => {
                            setInput(false);
                          }, 100);                        
                    }
                } 
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
                    rounded={10}
                    p={2}
                >
                    <ModalBody 
                        mt={`${modalPosition.height+6}px`}
                        p={0}
                        sx={{
                            '&::-webkit-scrollbar': {
                              width: '10px',
                              borderRadius: '8px',
                              backgroundColor: `rgba(0, 0, 0, 0.3)`,
                            },
                            '&::-webkit-scrollbar-thumb': {
                              borderRadius: '8px',
                              backgroundColor: `rgba(0, 0, 0, 0.3)`,
                            },
                          }}
                    >
                        {
                            searchState.query===''?
                            <>
                                <SearchTips isHistory={true}/>
                                <Text fontWeight={'bold'} fontSize={24} p={2} fontFamily={'Montserrat; sans-serif'}>Рекомендуем для вас</Text>
                                <RecommendationBlock count={10}/>
                            </>                            
                            :
                            <>
                              <SearchTips isHistory={true}/>
                              <SearchTips isHistory={false}/>
                            </>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Search