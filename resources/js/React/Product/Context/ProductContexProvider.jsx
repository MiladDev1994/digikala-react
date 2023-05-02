import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
export const ProductContext = createContext();

const ProductContexProvider = ({children}) => {

    const [product , setProduct] = useState([]);
    const [favorite , setFavorite] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${params.id}`)
            .then(response => {
                setProduct(response.data[0])
                setFavorite(response.data[1])
            })
    } , [])

    return (
        <ProductContext.Provider value={{product , favorite}}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContexProvider;
