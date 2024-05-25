import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const CheckoutForm = ({ clientSecret, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumberElement,
        billing_details: {
          // Добавьте здесь информацию о плательщике, если необходимо
        },
      },
    });

    if (error) {
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      console.log('Payment succeeded:', paymentIntent);
      toast.success("Payment succeeded!");
    }
  };

  const cardOptions = {
    style: {      
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  return (
    <>
          <Flex h={'100vh'} justify={'center'} align={'center'} direction={'column'}>
            <Box>
            <Box>
                <Text fontSize={28} fontWeight={'bold'} fontFamily={'Montserrat'}>Оплата банковской картой</Text>
                <Text fontSize={12} fontFamily={'Montserrat'}>Итого с учетом доставки и НДС</Text>
                <Text fontSize={20} fontWeight={'bold'}  fontFamily={'Montserrat'}>{amount} сом</Text>
                </Box>
            <Box borderRadius={5} shadow={"md"} mt={4} p={4}>
                <Image src='payment_logos.png' maxW={'320px'} mb={4}/>
              <form onSubmit={handleSubmit} style={{}}>
                <Flex w={'100%'}>
                  <Box w={'60%'} me={6}>
                      <label>Номер карты</label>
                      <Box borderWidth={'2px'} borderColor={"#aab7c4"} borderRadius={3} p={'2px'}><CardNumberElement options={cardOptions}/></Box>
                  </Box>
                  <Box w={'40%'}>
                      <label>CVC</label>
                      <Box borderWidth={'2px'} borderColor={"#aab7c4"} borderRadius={3} p={'2px'}><CardCvcElement  options={cardOptions}/></Box>
                  </Box>
                </Flex>
                <Box w={'100%'}>
                      <label>Действует до</label>
                      <Box borderWidth={'2px'} borderColor={"#aab7c4"} borderRadius={3} p={'2px'}><CardExpiryElement  options={cardOptions}/></Box>
                      </Box>
              </form>
              </Box>
                <Button
                    isDisabled={!stripe || succeeded ? true : false}
                    isLoading={processing}
                    loadingText='Submitting'
                    _hover={{ bg: 'brand.hovergreen' }}
                    variant={!stripe || succeeded || processing ? 'outline' : 'solid'}
                    bg={'brand.green'} 
                    color={'white'} 
                    w={'100%'} 
                    mt={4}
                    onClick={handleSubmit}
                >
                    Оплатить
                </Button>
              </Box>
              
          </Flex>
      
      <ToastContainer />
    </>
  );
};

export default CheckoutForm;
