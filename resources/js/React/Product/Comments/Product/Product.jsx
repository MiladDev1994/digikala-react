import React, {useContext, useEffect, useState} from 'react';
import styles from "./Product.module.css";
import {ProductContext} from "../../Context/ProductContexProvider";
import Toman from "../../../../../../public/images/tomanLight.svg";
import useShowProduct from "../../Hook/useShowProduct";
import {ShowProductContext} from "../../Context/ShowProductContextProvider";
import {useSelector , useDispatch} from "react-redux";
import {Add , Increase , Decrease , Remove} from "../../../Redux/Basket/BasketAction";
import useIsInBasket from "../../Hook/BasketHooks/useIsInBasket";
import useQuantity from "../../Hook/BasketHooks/useQuantity";




import {UserContext} from "../../../Context/UseContextProvider";
import {PermissionBasketContext} from "../../Context/PermissionBasketContextProvider";
import {BeatLoader} from "react-spinners";
import {Link} from "react-router-dom";
const Product = () => {




    const basket = useSelector(item => item.basket);
    const dispatch = useDispatch();
    const {product} = useContext(ProductContext)
    const [productTop , setProductTop] = useState([]);
    const {show, setShow} = useContext(ShowProductContext);




    const {user} = useContext(UserContext)
    const basketStart = useSelector(item => item.basketStart.data)
    const [fetchBasket , setFetchBasket] = useState([]);
    const {permission, setPermission} = useContext(PermissionBasketContext)
    useEffect(() => {
        const fetch = async () => {
            setFetchBasket(await basket)
        }
        fetch();
    } , [basket])

    useEffect(() => {
        setPermission(true);
    } , [fetchBasket])

    const basketHandler = (product , action) =>{
        setPermission(false);
        action === 'ADD' && dispatch(Add(product));
        action === 'INCREASE' && dispatch(Increase(product));
        action === 'DECREASE' && dispatch(Decrease(product));
        action === 'REMOVE' && dispatch(Remove(product));
    }








    useEffect(() => {
        setProductTop(useShowProduct(product).productTop)
    } , [product])

    return (
        <>
            {productTop.length ?
                productTop.map((item , index) =>
                    item.type.color === show ?

                        <div
                            key={item.id}
                            className={`w-100 position-sticky rounded-4 shadow p-2 text-light ${styles.product}`}
                            style={{right:`${index * 182}px`}}
                        >
                            <div className={'position-relative'}>
                                <img width={'100%'} className={'rounded-3'} src={`http://127.0.0.1:8000/images/${item.product[0].image.split(',')[0]}`} />
                                <div className={`position-absolute ${styles.type}`}>
                                    {item.product[0].variety_type === 'color' ?
                                        <div style={{backgroundColor: item.type.color}} className={'p-1 border border-dark border-opacity-25 shadow rounded-circle'} />
                                    : item.product[0].variety_type === 'null' ?
                                        null
                                            :
                                            <div className={' border border-dark border-opacity-25 shadow rounded-2 opacity-75 text-dark p-1'} style={{fontSize: '11px'}}>{item.type.color}</div>
                                    }
                                </div>
                            </div>

                            <div className={`mt-4`}>
                                <div className={`d-flex align-items-center justify-content-between`}>
                                    {item.price !== item.price_off ?
                                        <div className={`${styles.priceOff} bg-danger text-light px-2 rounded-pill`}>{`${Math.round((1 - (item.price_off / item.price)) * 100)}%`}</div>
                                        : <div className={`py-4 ${styles.priceOff}`} />
                                    }
                                    <div className={`d-flex`}>
                                        <div style={{fontWeight: '600'}}>{(item.price_off / 10).toLocaleString()}</div>
                                        <img width={'25px'} src={Toman}/>
                                    </div>
                                </div>
                                {
                                    item.price !== item.price_off ?
                                        <div className={`text-center mt-2 opacity-25`} style={{textDecoration: 'line-through'}}>{item.price}</div>
                                        : null
                                }
                            </div>

                            <div className={ `w-100 mt-2 bg-danger rounded-2 text-center shadow overflow-hidden d-flex align-items-center justify-content-center` } style={{height: '44px'}} dir={'rtl'}>
                                {user.length ?
                                    <>
                                        {permission ?
                                            <>
                                                {fetchBasket.active ?
                                                    useIsInBasket(fetchBasket.products , item.id) ?
                                                        <div
                                                            className={`${useQuantity(fetchBasket.products , item.id) >= item.remain && `opacity-25`} bi-plus-lg mt-2 m-2 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle`}
                                                            onClick={useQuantity(fetchBasket.products , item.id) < item.remain ? () => basketHandler(item , 'INCREASE') : null}
                                                            style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                                        ></div> :
                                                        <div className={`w-100 h-100 p-2 bg-danger ${styles.basketBtnBox}`} onClick={() => basketHandler(item , 'ADD')} style={{transition:"0.3s", cursor: 'pointer'}}> افزودن به سبد خرید </div>
                                                    :
                                                    useIsInBasket(basketStart , item.id) ?
                                                        <div
                                                            className={`${useQuantity(basketStart , item.id) >= item.remain && `opacity-25`} bi-plus-lg mt-2 m-2 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle`}
                                                            onClick={useQuantity(basketStart , item.id) < item.remain ? () => basketHandler(item , 'INCREASE') : null}
                                                            style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                                        ></div> :
                                                        <div className={`w-100 h-100 p-2 bg-danger ${styles.basketBtnBox}`} onClick={() => basketHandler(item , 'ADD')} style={{transition:"0.3s", cursor: 'pointer'}}> افزودن به سبد خرید </div>

                                                }

                                                {fetchBasket.active ?
                                                    useQuantity(fetchBasket.products , item.id) && <div
                                                        className={" mt-2 m-2 d-flex align-items-center justify-content-center  text-dark h3 bg-danger p-1 rounded-circle"}
                                                        style={{width: '30px', height: '30px',transition:"0.3s"}}
                                                    >{useQuantity(fetchBasket.products , item.id)}</div> :
                                                    useQuantity(basketStart , item.id) && <div
                                                        className={" mt-2 m-2 d-flex align-items-center justify-content-center  text-dark h3 bg-danger p-1 rounded-circle"}
                                                        style={{width: '30px', height: '30px',transition:"0.3s"}}
                                                    >{useQuantity(basketStart , item.id)}</div>
                                                }

                                                {fetchBasket.active ?
                                                    useQuantity(fetchBasket.products , item.id) === 1 && <div
                                                        className={"bi-trash3 mt-2 m-2 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle "}
                                                        onClick={() => basketHandler(item , 'REMOVE')}
                                                        style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                                    ></div> :
                                                    useQuantity(basketStart , item.id) === 1 && <div
                                                        className={"bi-trash3 mt-2 m-2 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle "}
                                                        onClick={() => basketHandler(item , 'REMOVE')}
                                                        style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                                    ></div>
                                                }

                                                {fetchBasket.active ?
                                                    useQuantity(fetchBasket.products , item.id) > 1 && <div
                                                        className={"bi-dash-lg mt-2 m-2 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle "}
                                                        onClick={() => basketHandler(item , 'DECREASE')}
                                                        style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                                    ></div> :
                                                    useQuantity(basketStart , item.id) > 1 && <div
                                                        className={"bi-dash-lg mt-2 m-2 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle "}
                                                        onClick={() => basketHandler(item , 'DECREASE')}
                                                        style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                                    ></div>
                                                }
                                            </>
                                            :
                                            <BeatLoader
                                                color="black"
                                                cssOverride={{}}
                                                loading
                                                speedMultiplier={2}
                                                size={10}
                                                margin={3}
                                                className={'opacity-50'}
                                            />
                                        }

                                    </>




                                    :
                                    <Link to={'/login'} className={'w-100 h-100 text-light d-flex align-items-center justify-content-center'}>افزودن به سبد خرید</Link>
                                }
                            </div>
                        </div>

                        :null
                )
                :null

            }
        </>

    );
};

export default Product;
