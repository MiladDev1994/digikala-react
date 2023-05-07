import React, {useContext, useEffect, useState} from 'react';
import styles from "./Products.module.css";
import {useSelector , useDispatch} from "react-redux";
import Toman from '../../../../../public/images/tomanLight.svg'
import TomanDanger from '../../../../../public/images/tomanRed.svg'
import useSumQuantity from "../../Hooks/useSumQuantity";
import {Link} from "react-router-dom";
import {BeatLoader} from "react-spinners";
import {PermissionBasketContext} from "../../Product/Context/PermissionBasketContextProvider";
import {Decrease, Increase, Remove} from "../../Redux/Basket/BasketAction";

const Products = () => {

    const basketStart = useSelector(item => item.basketStart.data)
    const dispatch = useDispatch();
    const basket = useSelector(item => item.basket);
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
        action === 'INCREASE' && dispatch(Increase(product));
        action === 'DECREASE' && dispatch(Decrease(product));
        action === 'REMOVE' && dispatch(Remove(product));
    }

    return (
        <>
            <div className={`w-100 px-2 opacity-50 mt-2`} style={{fontSize: '15px'}}>{`${fetchBasket.active ? useSumQuantity(fetchBasket.products).sumQuantity : useSumQuantity(basketStart).sumQuantity } کالا`}</div>
            <div className={'mt-2'}>
                {fetchBasket.active ?
                    fetchBasket.products.map((item , index) =>
                        <div key={item.id} className={`w-100 d-flex align-items-stretch ${index !== fetchBasket.products.length-1 ? `border-bottom border-secondary border-opacity-25` : ``} `}>
                            <div className={`${styles.rightBox} p-2 d-flex lign-items-center justify-content-center flex-column`}>
                                <Link to={`/product/${item.product[0].id}`} target={'_blank'}>
                                    <img className={'rounded-3 shadow'} width={'100%'} src={`http://127.0.0.1:8000/images/${item.product[0].image.split(',')[0]}`}/>
                                </Link>

                                <div className={`d-flex align-items-center justify-content-center mt-3`}>
                                    <div className={ `w-100 bg-danger rounded-2 text-center shadow overflow-hidden d-flex align-items-center justify-content-center` } style={{height: '44px'}} dir={'rtl'}>

                                        {permission ?
                                            <>
                                                <div
                                                    className={`${item.quantity >= item.variety.remain && `opacity-25`} bi-plus-lg mt-2 m-1 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle`}
                                                    onClick={item.quantity < item.variety.remain ? () => basketHandler(item.variety , 'INCREASE') : null}
                                                    style={{width: '30px', height: '30px', cursor: 'pointer'}}
                                                ></div>

                                                <div
                                                    className={" mt-2 m-1 d-flex align-items-center justify-content-center  text-dark h3 bg-danger p-1 rounded-circle"}
                                                    style={{width: '30px', height: '30px'}}
                                                >{item.quantity}</div>

                                                {item.quantity === 1 &&
                                                    <div
                                                        className={"bi-trash3 mt-2 m-1 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle "}
                                                        onClick={() => basketHandler(item.variety , 'REMOVE')}
                                                        style={{width: '30px', height: '30px', cursor: 'pointer'}}
                                                    />
                                                }

                                                {
                                                    item.quantity > 1 && <div
                                                        className={"bi-dash-lg mt-2 m-2 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle "}
                                                        onClick={() => basketHandler(item.variety , 'DECREASE')}
                                                        style={{width: '30px', height: '30px', cursor: 'pointer'}}
                                                    />
                                                }
                                            </>

                                            :
                                            <div className={'w-100 h-100 d-flex align-items-center justify-content-center'}>
                                                <BeatLoader
                                                    color="black"
                                                    cssOverride={{}}
                                                    loading
                                                    speedMultiplier={2}
                                                    size={10}
                                                    margin={3}
                                                    className={'opacity-50'}
                                                />
                                            </div>
                                        }


                                    </div>
                                </div>

                            </div>

                            <div className={`${styles.leftBox} p-2`}>
                                <div className={'opacity-75'}>{item.product[0].name}</div>
                                <div className={'mt-3 d-flex align-items-center justify-content-start'}>
                                    {item.type.type === 'color' ?
                                        <>
                                            <div className={'rounded-circle mt-1 me-3 border border-secondary border-opacity-50 shadow'} style={{backgroundColor: item.type.color, width: '25px', height: '25px'}}></div>
                                            <div className={'opacity-50'}>{item.type.name}</div>
                                        </> :
                                        item.type.type === 'single' ? null :
                                            <div className={'opacity-50 border border-secondary border-opacity-50 shadow rounded-3 p-1'}>{item.type.name}</div>

                                    }
                                </div>
                                <div className={`opacity-50 d-flex align-items-center justify-content-start mt-2`}>
                                    <i className={'bi-check2-circle h4 me-2 mt-1'} />
                                    <div style={{fontSize: '14px', whiteSpace: 'nowrap'}}>{`گارانتی ${item.variety.warranty.period} ${item.variety.warranty.name}`}</div>
                                </div>

                                <div className={`opacity-50 d-flex align-items-center justify-content-start mt-2`}>
                                    <i className={'bi-shop  h4 me-2 mt-1'} />
                                    <div style={{fontSize: '15px', whiteSpace: 'nowrap'}}>{item.variety.user.seller_name}</div>
                                </div>

                                <div className={`opacity-75 d-flex align-items-center justify-content-start mt-2`}>
                                    <div>مبلغ کل :</div>
                                    <div className={'mt-1 ms-2'} style={{fontSize: '18px', whiteSpace: 'nowrap'}}>{(item.price_off * item.quantity / 10).toLocaleString()}</div>
                                    <img src={Toman} className={'bi-shop  me-2 mt-1'} />
                                </div>

                                {item.price_off !== item.price ?

                                    <div className={`opacity-75 text-danger d-flex align-items-center justify-content-start mt-2`}>
                                        <div>تخفیف :</div>
                                        <div className={'mt-1 ms-2'} style={{fontSize: '18px', whiteSpace: 'nowrap'}}>{((item.price - item.price_off) * item.quantity / 10).toLocaleString()}</div>
                                        <img src={TomanDanger} className={'bi-shop  me-2 mt-1'} />
                                    </div>
                                    : null
                                }
                                {item.price_off < item.variety.price_off ?
                                    <div className={`text-dark py-1 px-2 d-inline-block rounded-1 shadow m-2 ${styles.animate}`}>{`قیمت کالا تغییر کرده است  .  قیمت جدید ${(item.variety.price_off * item.quantity / 10).toLocaleString()} تومان`}</div>
                                    :null
                                }
                                {item.quantity > item.variety.remain ?
                                    <div className={`text-dark py-1 px-2 d-inline-block rounded-1 shadow m-2 ${styles.animate}`}>{ 'موجودی کالا تغییر کرده است'}</div>
                                    :null
                                }

                            </div>
                        </div>
                    )
                    :
                    basketStart.map((item , index) =>
                        <div key={item.id} className={`w-100 d-flex align-items-stretch ${index !== basketStart.length-1 ? `border-bottom border-secondary border-opacity-25` : ``} `}>
                            <div className={`${styles.rightBox} p-2 d-flex lign-items-center justify-content-center flex-column`}>
                                <Link to={`/product/${item.product[0].id}`} target={'_blank'}>
                                    <img className={'rounded-3 shadow'} width={'100%'} src={`http://127.0.0.1:8000/images/${item.product[0].image.split(',')[0]}`}/>
                                </Link>

                                <div className={`d-flex align-items-center justify-content-center mt-3`}>
                                    <div className={ `w-100 bg-danger rounded-2 text-center shadow overflow-hidden d-flex align-items-center justify-content-center` } style={{height: '44px'}} dir={'rtl'}>

                                        {permission ?
                                            <>
                                        <div
                                            className={`${item.quantity >= item.variety.remain && `opacity-25`} bi-plus-lg mt-2 m-1 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle`}
                                            onClick={item.quantity < item.variety.remain ? () => basketHandler(item.variety , 'INCREASE') : null}
                                            style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                        ></div>

                                        <div
                                            className={" mt-2 m-1 d-flex align-items-center justify-content-center  text-dark h3 bg-danger p-1 rounded-circle"}
                                            style={{width: '30px', height: '30px',transition:"0.3s"}}
                                        >{item.quantity}</div>

                                        {item.quantity === 1 &&
                                            <div
                                                className={"bi-trash3 mt-2 m-1 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle "}
                                                onClick={() => basketHandler(item.variety , 'REMOVE')}
                                                style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                            />
                                        }

                                        {
                                            item.quantity > 1 && <div
                                                className={"bi-dash-lg mt-2 m-2 d-flex align-items-center justify-content-center shadow text-dark h5  p-1 rounded-circle "}
                                                onClick={() => basketHandler(item.variety , 'DECREASE')}
                                                style={{width: '30px', height: '30px',transition:"0.3s", cursor: 'pointer'}}
                                            />
                                        }
                                            </>

                                            :
                                            <div className={'w-100 h-100 d-flex align-items-center justify-content-center'}>
                                                <BeatLoader
                                                    color="black"
                                                    cssOverride={{}}
                                                    loading
                                                    speedMultiplier={2}
                                                    size={10}
                                                    margin={3}
                                                    className={'opacity-50'}
                                                />
                                            </div>
                                        }

                                    </div>
                                </div>

                            </div>

                            <div className={`${styles.leftBox} p-2`}>
                                <div className={'opacity-75'}>{item.product[0].name}</div>
                                <div className={'mt-3 d-flex align-items-center justify-content-start'}>
                                    {item.type.type === 'color' ?
                                        <>
                                            <div className={'rounded-circle mt-1 me-3 border border-secondary border-opacity-50 shadow'} style={{backgroundColor: item.type.color, width: '25px', height: '25px'}}></div>
                                            <div className={'opacity-50'}>{item.type.name}</div>
                                        </> :
                                        item.type.type === 'single' ? null :
                                            <div className={'opacity-50 border border-secondary border-opacity-50 shadow rounded-3 p-1'}>{item.type.name}</div>

                                    }
                                </div>
                                <div className={`opacity-50 d-flex align-items-center justify-content-start mt-2`}>
                                    <i className={'bi-check2-circle h4 me-2 mt-1'} />
                                    <div style={{fontSize: '14px', whiteSpace: 'nowrap'}}>{`گارانتی ${item.variety.warranty.period} ${item.variety.warranty.name}`}</div>
                                </div>

                                <div className={`opacity-50 d-flex align-items-center justify-content-start mt-2`}>
                                    <i className={'bi-shop  h4 me-2 mt-1'} />
                                    <div style={{fontSize: '15px', whiteSpace: 'nowrap'}}>{item.variety.user.seller_name}</div>
                                </div>

                                <div className={`opacity-75 d-flex align-items-center justify-content-start mt-2`}>
                                    <div>مبلغ کل :</div>
                                    <div className={'mt-1 ms-2'} style={{fontSize: '18px', whiteSpace: 'nowrap'}}>{(item.price_off * item.quantity / 10).toLocaleString()}</div>
                                    <img src={Toman} className={'bi-shop  me-2 mt-1'} />
                                </div>

                                {item.price_off !== item.price ?

                                    <div className={`opacity-75 text-danger d-flex align-items-center justify-content-start mt-2`}>
                                        <div>تخفیف :</div>
                                        <div className={'mt-1 ms-2'} style={{fontSize: '18px', whiteSpace: 'nowrap'}}>{((item.price - item.price_off) * item.quantity / 10).toLocaleString()}</div>
                                        <img src={TomanDanger} className={'bi-shop  me-2 mt-1'} />
                                    </div>
                                    : null
                                }
                                {item.price_off < item.variety.price_off ?
                                    <div className={`text-dark py-1 px-2 d-inline-block rounded-1 shadow m-2 ${styles.animate}`}>{`قیمت کالا تغییر کرده است  .  قیمت جدید ${(item.variety.price_off * item.quantity / 10).toLocaleString()} تومان`}</div>
                                    :null
                                }
                                {item.quantity > item.variety.remain ?
                                    <div className={`text-dark py-1 px-2 d-inline-block rounded-1 shadow m-2 ${styles.animate}`}>{ 'موجودی کالا تغییر کرده است'}</div>
                                    :null
                                }

                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Products;
