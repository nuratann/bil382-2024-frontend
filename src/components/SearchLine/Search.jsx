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

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    const [inputWidth, setInputWidth] = useState('auto');
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const updateInputWidth = () => {

        if (searchRef.current) {
          const width = searchRef.current.offsetWidth+6;
          setInputWidth(`${width}px`);
          const rect = searchRef.current.getBoundingClientRect();
            setModalPosition({
            top: rect.top-67,
            left: rect.left-3,
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

      const [searchString, setSearchString] = useState('');

    return (
        <>
            <SearchLine inputClick={onOpen} searchRef={searchRef} inModal={false}  value={searchString} onChange={setSearchString}/>
            <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={inputRef} trapFocus={false}>
                <ModalOverlay backdropFilter='blur(5px)'/>
                <ModalContent 
                    size={'lg'} 
                    maxW={inputWidth}
                    position="fixed"
                    top={modalPosition.top}
                    left={modalPosition.left}
                    zIndex={1}
                    rounded={10}
                >
                    <ModalHeader mt={'48px'}>
                        Header
                    </ModalHeader>
                    <ModalBody>
                        Body
                    </ModalBody>
                    <ModalFooter>
                        Footer
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Search