
import React, { createContext, useState } from 'react';

export const CardDataContext = createContext(null);

export const CardDataProvider = ({ children }) => {
    const [cardData, setCardData] = useState({
        cardNumber: '',
        expiry: { month: '', year: '' },
        cvv: ''
    });

    return (
        <CardDataContext.Provider value={{ cardData, setCardData }}>
            {children}
        </CardDataContext.Provider>
    );

};

// export default CardDataContext;
