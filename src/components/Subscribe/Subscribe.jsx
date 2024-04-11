import {
    Box,
    Flex,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,
    Icon,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';

import { FaEnvelope } from 'react-icons/fa'; // Assuming you have Font Awesome icons installed

function SubscribeSection() {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const subscriptionColor = useColorModeValue('teal.600', 'teal.300'); // Adjust based on your color theme

    return (
        <Box
            as="section"
            backgroundColor="gray.100"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={{ base: '52px 60px', md: '50px' }}
        >
            <Flex
                flexDirection="column"
                alignItems="center"
                maxWidth={isMobile ? '100%' : '411px'}
            >
                <Heading
                    fontSize="2xl"
                    fontWeight="semibold"
                    marginBottom="4"
                    color="black" // Emphasis on "Подпишись"
                >
                    Подпишись на рассылки
                </Heading>
                <Text fontSize="md" color="gray.600" marginBottom="6">
                    Получай прямо на почту, выгодные предложения
                </Text>
                <FormControl display="flex" gap={isMobile ? 0 : 4} whiteSpace={isMobile ? 'initial' : 'nowrap'}>
                    <FormLabel htmlFor="email" srOnly>
                        Email
                    </FormLabel>
                    <Flex flexGrow={1} flexBasis={0} width="fit-content">
                        <Icon as={FaEnvelope} boxSize="5" color="gray.400" mr={2} mt={2} />
                        <Input type="email" id="email" placeholder="почта" aria-label="Enter your email" />
                    </Flex>
                    <Button
                        backgroundColor="brand.hoverblue" // Adjusted button color
                        color="white"
                        fontWeight="medium"
                        borderRadius="md"
                        padding={{ base: '15px 16px', md: '18px 24px' }}
                        type="submit"
                    >
                        Подписаться
                    </Button>
                </FormControl>
            </Flex>
        </Box>
    );
}

export default SubscribeSection;
