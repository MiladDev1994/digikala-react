import React, {useContext, useEffect, useState} from 'react';
import styles from "./PriceBox.module.css";
import {UserContext} from "../../../Context/UseContextProvider";
import Toman from "../../../../../../public/images/tomanLight.svg";
import useShowProduct from "../../Hook/useShowProduct";
import {ProductContext} from "../../Context/ProductContexProvider";
import {Link} from "react-router-dom";
import {ShowProductContext} from "../../Context/ShowProductContextProvider";
import {useSelector , useDispatch} from "react-redux";
import {Add , Increase , Decrease , Remove} from "../../../Redux/Basket/BasketAction";
import useIsInBasket from "../../Hook/BasketHooks/useIsInBasket";
import useQuantity from "../../Hook/BasketHooks/useQuantity";
import {PermissionBasketContext} from "../../Context/PermissionBasketContextProvider";
import {BeatLoader} from "react-spinners";

const PriceBox = () => {

    const {user} = useContext(UserContext)
    const basketStart = useSelector(item => item.basketStart.data)
    const basket = useSelector(item => item.basket);
    const dispatch = useDispatch();

    const [fetchBasket , setFetchBasket] = useState([]);
    const {product , favorite} = useContext(ProductContext);
    const [productTop , setProductTop] = useState([]);
    const {show , setShow} = useContext(ShowProductContext);
    const {permission, setPermission} = useContext(PermissionBasketContext)

    useEffect(() => {
        setProductTop(useShowProduct(product).productTop)
    } , [product])

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

    return (
        <div className={`${styles.priceBox}`} dir={'ltr'}>
            {productTop.length ?
                productTop.map(item =>
                    <div key={item.id} className={`${styles.itemPrice} text-light rounded-4 shadow px-3 ${item.type.color === show ? `d-flex flex-column` : `d-none`}`}>
                        <h5 className={`${styles.paddingControl} d-flex align-items-center justify-content-end`}> فروشنده</h5>
                        <Link to={`/shop/seller-${item.user_id}`} className={` d-flex align-items-center justify-content-end border-bottom border-secondary border-opacity-10 rounded-3 link-light ${styles.paddingControl} ${styles.sellerShop}`}>
                            <h5 className={'mt-1'}>{item.user.seller_name}</h5>
                            <i className={'bi-shop h4 me-4'} />
                        </Link>

                        <div className={`border-bottom border-secondary border-opacity-25 opacity-50 d-flex align-items-center justify-content-end ${styles.paddingControl}`}>
                            <div className={''} style={{fontSize: '13px', whiteSpace: 'nowrap'}}>{`گارانتی ${item.warranty.period} ${item.warranty.name}`}</div>
                            <i className={'bi-check2-circle h4 me-2'} />
                        </div>
                        <div className={`border-bottom border-secondary border-opacity-25 opacity-50 d-flex align-items-center justify-content-end ${styles.paddingControl}`}>
                            <div className={''} style={{fontSize: '13px', whiteSpace: 'nowrap'}}>{`ارسال از ${item.shipping_time} روز کاری دیگر`}</div>
                            <i className={'bi-hdd-stack text-info h4 me-2'} />
                        </div>

                        <div className={`${styles.priceControl}`}>
                            {item.price_off !== item.price ?
                                <div className={`d-flex align-items-center justify-content-between px-3 py-2 ${styles.priceFee}`}>
                                    <div className={`opacity-50`} style={{textDecoration: 'line-through'}}>{(item.price / 10).toLocaleString()}</div>
                                    <div className={`bg-danger rounded-pill px-2 shadow`}>{`${Math.round((1 - (item.price_off / item.price)) * 100)}%`}</div>
                                </div>
                                :
                                <div style={{padding: '5.15%'}}></div>
                            }

                            <div className={`d-flex align-items-center justify-content-start px-3 py-2`}>
                                <img height={'28px'} src={Toman} />
                                <h5 className={`mt-2`}>{(item.price_off / 10).toLocaleString()}</h5>
                            </div>
                        </div>



                        <div className={`${styles.basketBtn} d-flex align-items-center justify-content-center`}>
                            <div className={ `w-75 bg-danger rounded-2 text-center shadow overflow-hidden d-flex align-items-center justify-content-center` } style={{height: '44px'}} dir={'rtl'}>
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



                    </div>
                )
                : null
            }
        </div>
    );
};

export default PriceBox;
