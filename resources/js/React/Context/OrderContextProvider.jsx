import React, {createContext, useState} from 'react';
export const OrderContext = createContext();
const OrderContextProvider = ({children}) => {

    const [sendingOrder , setSendingOrder] = useState({
        data: [],
        action: false,
        permission: false,
    })

    return (
        <OrderContext.Provider value={{sendingOrder , setSendingOrder}}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;
