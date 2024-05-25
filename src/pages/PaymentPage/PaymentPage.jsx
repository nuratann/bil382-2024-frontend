// PaymentPage.js
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { fetchClientSecret } from '../../api/FetchStripe';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { useLocation } from 'react-router-dom';
const stripePromise = loadStripe('pk_test_51PJeSX08MXO6we99KRwkspzVIUmINvrHaVYHTxivEOzdqHxC1CNZrPKImHi4iUfbYFwEfVGQ91FOd7SMBSssnlKZ00Q0mVeAFH');

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState('');
  const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const amountParam = searchParams.get('amount');
  useEffect(() => {
    const getClientSecret = async () => {
      try {        
        const clientSecret = await fetchClientSecret(amountParam); // Укажите сумму оплаты
        setClientSecret(clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };

    getClientSecret();
  }, []);


  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm clientSecret={clientSecret} amount={amountParam} />
    </Elements>
  );
};

export default PaymentPage;
