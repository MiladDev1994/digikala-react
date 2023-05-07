import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Basket from "./Basket";
import Pay from "./Pay/Pay";
import {useSelector} from "react-redux";

const BasketRoute = () => {

    const basketStart = useSelector(item => item.basketStart.data)
    const basket = useSelector(item => item.basket);
    const [fetchBasket , setFetchBasket] = useState([]);

    const changeQuantityHandler = (product) => {
        return product.filter(item => item.quantity > item.variety.remain).length;
    }

    useEffect(() => {
        const fetch = async () => {
            setFetchBasket(await basket)
        }
        fetch();
    } , [basket])

    return (
        <Routes>
            <Route path={'/'} element={<Basket />} />
            <Route path={'pay'} element={fetchBasket.active ?
                changeQuantityHandler(fetchBasket.products) ? <Navigate to={'/'} /> : <Pay />
                :
                changeQuantityHandler(basketStart) ? <Navigate to={'/'} /> : <Pay />
            } />
        </Routes>

    );
};

export default BasketRoute;
