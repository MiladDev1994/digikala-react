import React, {createContext, useState} from 'react';
export const PermissionBasketContext = createContext();
const PermissionBasketContextProvider = ({children}) => {

    const [permission , setPermission] = useState(true);
    return (
        <PermissionBasketContext.Provider value={{permission , setPermission}}>
            {children}
        </PermissionBasketContext.Provider>
    );
};

export default PermissionBasketContextProvider;
