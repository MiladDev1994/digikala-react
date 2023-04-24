import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {queryStringContext} from "./queryStringContextProvider";
import {useLocation, useParams} from "react-router-dom";

export const VarietyContext = createContext();

const VarietyContextProvider = ({children}) => {

    const [variety , setVariety] = useState([]);
    const {query , setQuery} = useContext(queryStringContext);
    const location = useLocation();
    const params = useParams();
    const id = params.id.split('-')[1];
    const types = params.id.split('-')[0];

    useEffect(() => {
        if (location.pathname.includes('category')){
            axios.post('/api/varieties' , {
                type:types,
                id:id ,
                query:query,
            })
                .then(response => setVariety(response.data.data))
                .catch(error => console.log('no'))
        }
    } , [params , query])

    return (
        <VarietyContext.Provider value={{variety , setVariety}}>
            {children}
        </VarietyContext.Provider>
    );
};

export default VarietyContextProvider;
