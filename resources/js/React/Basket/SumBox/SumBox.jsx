import React, {useEffect, useState} from 'react';
import styles from './SumBox.module.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Toman from '../../../../../public/images/tomanLight.svg'
import TomanDanger from '../../../../../public/images/tomanRed.svg'


const SumBox = () => {

    const basketStart = useSelector(item => item.basketStart.data)
    const basket = useSelector(item => item.basket);
    const [fetchBasket , setFetchBasket] = useState([]);

    const sumAllHandler = (product) => {
        return  product.reduce((initial , item) =>  initial + (item.quantity * item.variety.price / 10) , 0);
    }

    const sumBasketHandler = (product) => {
        return  product.reduce((initial , item) =>  initial + (item.quantity * item.variety.price_off / 10) , 0);
    }

    const sumOffHandler = (product) => {
        return  product.reduce((initial , item) =>  initial + (item.quantity * (item.variety.price - item.variety.price_off) / 10) , 0);
    }

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
        <div className={`py-2 ${styles.box}`} dir={'ltr'}>
            <div className={`px-1 py-2 ${styles.priceBox}`}>
                <div className={`d-flex align-items-center justify-content-between opacity-50`}>
                    <div className={'d-flex'}>
                        <img src={Toman}/>
                        <div>{fetchBasket.active ? sumAllHandler(fetchBasket.products).toLocaleString() : sumAllHandler(basketStart).toLocaleString()}</div>
                    </div>
                    <div>قیمت کالاها</div>
                </div>

                <div className={`d-flex align-items-center justify-content-between mt-4`}>
                    <div className={'d-flex'}>
                        <img src={Toman}/>
                        <div>{fetchBasket.active ? sumBasketHandler(fetchBasket.products).toLocaleString() : sumAllHandler(basketStart).toLocaleString()}</div>
                    </div>
                    <div>جمع سبد خرید</div>
                </div>

                {fetchBasket.active ?
                    sumOffHandler(fetchBasket.products) > 0 ?
                        <>
                            <div className={`d-flex align-items-center justify-content-between mt-4 text-danger`}>
                                <div className={'d-flex'}>
                                    <img src={TomanDanger}/>
                                    <div>{sumOffHandler(fetchBasket.products).toLocaleString()}</div>
                                </div>
                                <div>سود شما از خرید</div>
                            </div>
                        </>
                        : null
                    :sumAllHandler(basketStart) > 0 ?
                        <>
                            <div className={`d-flex align-items-center justify-content-between mt-4 text-danger`}>
                                <div className={'d-flex'}>
                                    <img src={TomanDanger}/>
                                    <div>{sumAllHandler(basketStart).toLocaleString()}</div>
                                </div>
                                <div>سود شما از خرید</div>
                            </div>
                        </>
                        :null
                }

            </div>
            <div className={`w-100 ${styles.btnBox}`}>
                {fetchBasket.active ?
                    changeQuantityHandler(fetchBasket.products) ?
                        <div className={`btn btn-warning w-100 mt-5 ${styles.link}`}>لطفا تعداد را اصلاح کنید</div>
                        :
                        <Link to={'pay'} className={`btn btn-danger w-100 mt-5 ${styles.link}`}>ادامه</Link>
                    :
                    changeQuantityHandler(basketStart) ?
                        <div className={`btn btn-warning w-100 mt-5 ${styles.link}`}>لطفا تعداد را اصلاح کنید</div>
                        :
                        <Link to={'pay'} className={`btn btn-danger w-100 mt-5 ${styles.link}`}>ادامه</Link>
                }

            </div>



        </div>

    );
};

export default SumBox;
