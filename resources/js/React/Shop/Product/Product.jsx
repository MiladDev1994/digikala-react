import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {queryStringContext} from "../Context/queryStringContextProvider";
import {useLocation, useParams} from "react-router-dom";
// import {VarietyContext} from "../Context/VarietyContextProvider";

const Product = () => {

    const [variety , setVariety] = useState([]);
    const {query , setQuery} = useContext(queryStringContext);
    const [page , setPage] = useState(1)
    const params = useParams();

    const id = params.id.split('-')[1];
    const types = params.id.split('-')[0];


    const getData = async () => {
        const response = await axios.post(`/api/varieties?page=${page}` , {
            type:types,
            id:id ,
            query:query,
        });
        page === 1 ?
        setVariety(response.data.data) :
        setVariety(prev =>[...prev , ...response.data.data])

    }

    const scrollHandler = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight){
                setPage(prev => prev + 1);
            }
        } catch (error){
            console.log(error);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll' , scrollHandler)
    } , [])

    useEffect(() => {
        getData();
    } , [page])

    useEffect(() => {
        page === 1 ?
            getData():
            setPage(1);
        document.documentElement.scrollTop = 0;
    } , [query , params]);

    return (
        <div>
            {variety.length ?
                variety.map((item , index) =>
                    <div key={item.id} className={'text-light'} style={{height: '400px'}}>
                        <img height={'100px'} className={'d-block'} src={`http://127.0.0.1:8000/images/${item.product[0].image.split(',')[0]}`} />
                        <h3>{item.brand.name}</h3>
                        <h3>{item.id}</h3>
                        <h3>{item.type.name}</h3>
                        <h3>{item.shipping_time} : shipping_time</h3>
                        <h3>{item.moreSell} : moreSell</h3>
                        <h3>{item.special} : special</h3>
                        <h3>{(item.price_off / 10).toLocaleString()} : price</h3>
                    </div>
                )
                : null
            }
        </div>
    );
};

export default Product;
