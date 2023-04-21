import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {fetchVarietiesApi} from "../Redux/Varieties/VarietiesAction";

const Shop = () => {

    const varieties = useSelector(item => item.varieties.data);
    const dispatch = useDispatch();
    const params = useParams();
    const [data , setData] = useState([]);

    console.log(data)

    useEffect(() => {
        if (Object.keys(params).includes('id') && params.id.split('-')[0] === 'category'){
            setData(varieties.filter(item => item.categories.filter(element => element.id === Number(params.id.split('-')[1])).length))
        }else if (Object.keys(params).includes('id') && params.id.split('-')[0] === 'brand'){
            setData(varieties.filter(item => item.brand_id === Number(params.id.split('-')[1])))
        }else if (Object.keys(params).includes('id') && params.id.split('-')[0] === 'moreSell'){
            setData(varieties.filter(item => item.brand_id === Number(params.id.split('-')[1])))
        }else if (Object.values(params)[0].split('/')[1] === 'moreSell'){
            setData(varieties.filter(item => item.moreSell === 1))
        } else if (Object.values(params)[0].split('/')[1] === 'special'){
            setData(varieties.filter(item => item.special === 1))
        }

        !varieties.length && dispatch(fetchVarietiesApi());
    } , [varieties , params])
    return (
        <div>
            {data.length ?
                data.map(item =>
                    <h1 key={item.id}>{item.brand_id}</h1>
                )
                :null
            }
        </div>
    );
};

export default Shop;
