import React from 'react';
import RegForm from './RegForm';
import {
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import OAuthBlock from './OAuthBlock';

const RegFormModalWrapper = () => {
    return (
        <>
        <ModalHeader>Регистрация</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                <RegForm type='register'/>
            </ModalBody>
            <OAuthBlock />
        </>
    )
}

export default RegFormModalWrapper