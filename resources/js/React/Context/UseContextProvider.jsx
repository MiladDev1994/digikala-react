import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
export const UserContext = createContext();

const UseContextProvider = ({children}) => {

    const [user , setUser] = useState([]);

    useEffect( () => {
        const fetchUser = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/loginedIn')
            setUser(response.data)
        }
        fetchUser();
    } , [])

    return (
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default UseContextProvider;
