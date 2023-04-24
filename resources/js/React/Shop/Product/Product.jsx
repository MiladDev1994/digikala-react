import React, {useContext , useEffect} from 'react';
import axios from "axios";
import {queryStringContext} from "../Context/queryStringContextProvider";

const Product = () => {

    const {query , setQuery} = useContext(queryStringContext);

    useEffect(() => {
    axios.post('/api/varieties' , {query}).then(response => console.log(response.data)).catch(error => console.log('no'))
    } , [query])


    return (
        <div>
            Product
        </div>
    );
};

export default Product;
