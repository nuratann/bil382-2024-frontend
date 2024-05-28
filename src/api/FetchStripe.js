export const fetchClientSecret = async (amount) => {
    const response = await fetch('http://localhost:8080/api/v1/payment/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount }), // Укажите сумму оплаты
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };