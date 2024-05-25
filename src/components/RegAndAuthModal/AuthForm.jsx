import React, { useState } from 'react'
import {
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Box,
    VStack,
} from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import OAuthBlock from './OAuthBlock';
import useUserStore from '../../stores/useUserStore'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCheckMark from '../AnimatedCheckMark/AnimatedCheckMark';



const AuthForm = () => {
    const userState = useUserStore(state=>state)
    const [isAuth, setIsAuth] = useState(false)
    const initialValues = {
        usernameOrEmail: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        usernameOrEmail: Yup.string().required('Username or Email is required'),
        password: Yup.string().required('Password is required'),
        rememberMe: false
    });

    const handleSubmit = (values, { setSubmitting }) => { 
        userState.signIn(values.usernameOrEmail, values.password)
            .then((user) => {
                // Если аутентификация прошла успешно
                setIsAuth(true)
                setTimeout(() => {
                    userState.updateUser(user); 
                }, 1500);
                        
                setSubmitting(false);
            })
            .catch(error => {
                // Если произошла ошибка во время аутентификации
                console.error('Authentication error:', error);
                toast.error('Ошибка!');
                setSubmitting(false);
            });
        
        
    };
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const styles = {
        input: {
            borderWidth: '2px',
            borderColor: 'gray.300',
        },
    };
    return (
        <>

            <ModalHeader>Вход</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {isAuth ?
                    <>
                    <Flex justify={'center'} align={'center'}>
                        <Box boxSize={24}>
                            <AnimatedCheckMark type='success'/>
                        </Box>
                    </Flex>
                    </>
                    :
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field name="usernameOrEmail">
                                    {({ field }) => (
                                        <FormControl isInvalid={!!field.error}>
                                            <Input {...field} id="usernameOrEmail" placeholder='логин или email' sx={styles.input} autoComplete='off' />
                                            <ErrorMessage name="usernameOrEmail" component={FormHelperText} color="red" />
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="password">
                                    {({ field }) => (
                                        <FormControl mt={4} isInvalid={!!field.error}>
                                            <InputGroup size='md'>
                                                <Input
                                                    {...field}
                                                    pr='4.5rem'
                                                    id="password"
                                                    type={show ? 'text' : 'password'}
                                                    placeholder='пароль'
                                                    sx={styles.input}
                                                />
                                                <InputRightElement width='4.5rem'>
                                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                        {show ? 'Hide' : 'Show'}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <ErrorMessage name="password" component={FormHelperText} color="red" autoComplete='off' />
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="rememberMe" type="checkbox">
                                    {({ field }) => (
                                        <FormControl mt={4}>
                                            <Checkbox {...field} id="rememberMe">
                                                Запомнить меня
                                            </Checkbox>
                                        </FormControl>
                                    )}
                                </Field>
                                <Flex justify={'center'} w={'100%'} pt={2}>
                                    <Button isLoading={isSubmitting} type="submit" bg='brand.blue' color={'white'} mr={3} rounded={'2xl'} w={'70%'}>
                                        {isSubmitting ? 'Вход...' : 'Войти'}
                                    </Button>
                                </Flex>
                            </Form>
                        )}
                    </Formik>
                }
                
            </ModalBody>
            <OAuthBlock />
            <ToastContainer />
        </>
    )
}

export default AuthForm