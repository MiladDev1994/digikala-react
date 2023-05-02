import React, {createContext, useState} from 'react';
export const ShowProductContext = createContext();
const ShowProductContextProvider = ({children}) => {

    const [show , setShow] = useState(0);
    return (
        <ShowProductContext.Provider value={{show, setShow}}>
            {children}
        </ShowProductContext.Provider>
    );
};

export default ShowProductContextProvider;
