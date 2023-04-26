import React, {createContext, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {GetQueryString} from "../Hooks/GetQueryString";

export const queryStringContext = createContext();

const QueryStringContextProvider = ({children}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryS = GetQueryString()
    const [query , setQuery] = useState({
        category: [],
        brand: [],
        variety: [],
        moreSell: [],
        special: [],
        minPrice: [],
        maxPrice: [],
        shipping: [],
        sort: [],
    })

    useEffect(() => {
        setQuery({...query , ...queryS})
    } , [])

    useEffect(() => {
        setSearchParams(query)
    } , [query])

    return (
        <queryStringContext.Provider value={{query , setQuery}}>
            {children}
        </queryStringContext.Provider>
    );
};

export default QueryStringContextProvider;
