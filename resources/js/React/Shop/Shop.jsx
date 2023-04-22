import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {fetchVarietiesApi} from "../Redux/Varieties/VarietiesAction";
import {GetQueryString} from "./Hooks/GetQueryString";
import {useSearchParams} from "react-router-dom";

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query , setQuery] = useState({
        category: ['کالای دیجیتال'],
        brand: ['7'],
        variety: ['آبی'],
        moreSell: [true],
        special: [],
        price: [],
        shipping: [],
        height: [],
        width: [],
        depp: [],
        wight: ['10kg'],
        new: [],
        expensive: [],
        Inexpensive: [],
    })


    console.log(query)
    const checkHandler = (e) => {
        if (e.target.checked){
            setQuery({...query , ...query.category.push(e.target.value)})
        }else {
            let index = query[e.target.name].indexOf(e.target.value)

            query[e.target.name].splice(index , 1);
            setQuery({...query})
        }
    }

useEffect(() => {
    setSearchParams(query);
    axios.post('/api/varieties' , {query}).then(response => console.log(response.data)).catch(error => console.log('no'))
} , [query])


    // const varieties = useSelector(item => item.varieties.data);
    // const dispatch = useDispatch();
    // const params = useParams();
    // const [data , setData] = useState([]);
    //
    // // console.log(query.name.includes('milad'))
    //
    // useEffect(() => {
    //     if (Object.keys(params).includes('id') && params.id.split('-')[0] === 'category'){
    //         setData(varieties.filter(item => item.categories.filter(element => element.id === Number(params.id.split('-')[1])).length))
    //     }else if (Object.keys(params).includes('id') && params.id.split('-')[0] === 'brand'){
    //         setData(varieties.filter(item => item.brand_id === Number(params.id.split('-')[1])))
    //     }else if (Object.keys(params).includes('id') && params.id.split('-')[0] === 'moreSell'){
    //         setData(varieties.filter(item => item.brand_id === Number(params.id.split('-')[1])))
    //     }else if (Object.values(params)[0].split('/')[1] === 'moreSell'){
    //         setData(varieties.filter(item => item.moreSell === 1))
    //     } else if (Object.values(params)[0].split('/')[1] === 'special'){
    //         setData(varieties.filter(item => item.special === 1))
    //     }
    //
    //     !varieties.length && dispatch(fetchVarietiesApi());
    // } , [varieties , params])
    //
    //
    //

    //
    return (
        <div>
            {/*{data.length ?*/}
            {/*    data.map(item =>*/}
            {/*        // <h1 key={item.id}>{item.brand_id}</h1>*/}
            {/*        console.log(item)*/}
            {/*    )*/}
            {/*    :null*/}
            {/*}*/}



            <input type={'checkbox'} checked={query.category.includes('کیف و کاور گوشی') ? true : false} value={'کیف و کاور گوشی'} name={'name'} className={'btn btn-success m-5'} onChange={checkHandler} />
            <input type={'checkbox'} checked={query.category.includes('سوییشرت و هودی مردانه') ? true : false} value={'سوییشرت و هودی مردانه'} name={'name'} className={'btn btn-success m-5'} onChange={checkHandler} />
            <input type={'checkbox'} checked={query.category.includes('نان') ? true : false} value={'نان'} name={'name'} className={'btn btn-success m-5'} onChange={checkHandler} />
            <input type={'checkbox'} checked={query.category.includes('کفش روزمره') ? true : false} value={'کفش روزمره'} name={'name'} className={'btn btn-success m-5'} onChange={checkHandler} />
        </div>
    );
};

export default Shop;
