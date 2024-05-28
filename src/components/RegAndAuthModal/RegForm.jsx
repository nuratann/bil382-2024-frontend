import React from 'react'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Input,
    FormControl,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Button,
    VStack,
    HStack,
    Text,
    Link,
    Checkbox,
    Flex,
    FormErrorMessage,
    FormLabel,
    Select, Box
} from '@chakra-ui/react';
import {
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import OAuthBlock from './OAuthBlock';
import useUserStore from '../../stores/useUserStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCheckMark from '../AnimatedCheckMark/AnimatedCheckMark';

const RegForm = () => {
    
    const GenderEnum = {
        MALE: "male",
        FEMALE: "female",
        UNDEFINED: "undefined",
      };

      const userState = useUserStore(state=>state)
      const [isAuth, setIsAuth] = useState(false)
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const initialValues = {
        firstName: '',
        lastName: '',
        username: '',
        birthDate: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    };

    

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        username: Yup.string().required('Username is required'),
        birthDate: Yup.date()
            .required('Дата рождения обязательна')
            .typeError('Неверный формат даты')
            .max(new Date(), 'Дата рождения не может быть в будущем')
            .min(new Date('1900-01-01'), 'Дата рождения должна быть после 01.01.1900'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().required('phone is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = async (values, { setSubmitting,setFieldError }) => {
        // const response = await signUp(values)
        // if(response==='email'){
        //     setFieldError('email', 'Этот email уже занят');
        // }
        // else if(response==='username'){
        //     setFieldError('username', 'Этот логин уже занят');
        // }
        // else{
        //     console.log(state)
        // }
        // setSubmitting(false);
        userState.signUp(values)
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

    const styles = {
        input: {
            borderWidth: '2px',
            borderColor: 'gray.300',
        },
    };

    return (
        <>
                {isAuth ?
                    <>
                        <Flex justify={'center'} align={'center'}>
                            <Box boxSize={24}>
                                <AnimatedCheckMark type='success' />
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
                                <VStack spacing={4}>
                                    <HStack spacing={2}>
                                        <Field name="firstName">
                                            {({ field }) => (
                                                <FormControl isInvalid={!!field.error}>
                                                    <Input {...field} placeholder="Имя" sx={styles.input} />
                                                    <ErrorMessage name="firstName" component={FormHelperText} color="red" />
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="lastName">
                                            {({ field }) => (
                                                <FormControl isInvalid={!!field.error}>
                                                    <Input {...field} placeholder="Фамилия" sx={styles.input} />
                                                    <ErrorMessage name="lastName" component={FormHelperText} color="red" />
                                                </FormControl>
                                            )}
                                        </Field>
                                    </HStack>

                                    <Field name="username">
                                        {({ field }) => (
                                            <FormControl isInvalid={!!field.error}>
                                                <Input {...field} placeholder="Придумайте логин" sx={styles.input} />
                                                <ErrorMessage name="username" component={FormHelperText} color="red" />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <HStack spacing={2} w={'100%'} >
                                        <Field name="birthDate">
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.birthdate && form.touched.birthdate}>
                                                    <Input {...field} placeholder='День рождения' type='date' sx={styles.input} />
                                                    <ErrorMessage name="birthDate" component={FormErrorMessage} />
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="gender">
                                            {({ field }) => (
                                                <FormControl>
                                                    <Select {...field} id="gender" placeholder="Пол" sx={styles.input}>
                                                        {Object.values(GenderEnum).map((gender) => (
                                                            <option key={gender} value={gender}>
                                                                {gender}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                    <ErrorMessage name="gender" component="div" />
                                                </FormControl>
                                            )}
                                        </Field>
                                    </HStack>

                                    <Field name="email">
                                        {({ field }) => (
                                            <FormControl isInvalid={!!field.error}>
                                                <Input {...field} placeholder="Email" sx={styles.input} />
                                                <ErrorMessage name="email" component={FormHelperText} color="red" />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="phone">
                                        {({ field }) => (
                                            <FormControl isInvalid={!!field.error}>
                                                <Input {...field} placeholder="Телефон" sx={styles.input} />
                                                <ErrorMessage name="phone" component={FormHelperText} color="red" />
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="password">
                                        {({ field }) => (
                                            <FormControl isInvalid={!!field.error}>
                                                <InputGroup size="md">
                                                    <Input
                                                        {...field}
                                                        pr="4.5rem"
                                                        type={show ? 'text' : 'password'}
                                                        placeholder="Пароль"
                                                        sx={styles.input}
                                                    />
                                                    <InputRightElement width="4.5rem">
                                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                            {show ? 'Hide' : 'Show'}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                                <ErrorMessage name="password" component={FormHelperText} color="red" />
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="confirmPassword">
                                        {({ field }) => (
                                            <FormControl isInvalid={!!field.error}>
                                                <InputGroup size="md">
                                                    <Input
                                                        {...field}
                                                        pr="4.5rem"
                                                        type={show ? 'text' : 'password'}
                                                        placeholder="Подтвердите пароль"
                                                        sx={styles.input}
                                                    />
                                                    <InputRightElement width="4.5rem">
                                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                            {show ? 'Hide' : 'Show'}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                                <ErrorMessage name="confirmPassword" component={FormHelperText} color="red" />
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Text fontSize={11} my={2} fontFamily={'"Tilt Neon", sans-serif;'}>
                                        By selecting Create personal account, you agree to our{' '}
                                        <Link color="brand.blue">User Agreement</Link> and acknowledge reading our{' '}
                                        <Link color="brand.blue">User Privacy Notice</Link>.
                                    </Text>

                                    <Flex justify="center" w="100%" pt={2}>
                                        <Button
                                            isLoading={isSubmitting}
                                            type="submit"
                                            bg="brand.blue"
                                            color="white"
                                            rounded="2xl"
                                            w="70%"
                                        >
                                            {isSubmitting ? 'Создание...' : 'Создать учетную запись'}
                                        </Button>
                                    </Flex>
                                </VStack>
                            </Form>
                        )}
                    </Formik>
                }
        </>
    );
};

export default RegForm;
