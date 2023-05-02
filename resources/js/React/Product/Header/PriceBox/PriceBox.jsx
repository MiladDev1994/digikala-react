import React, {useContext, useEffect, useState} from 'react';
import styles from "./PriceBox.module.css";
import Toman from "../../../../../../public/images/tomanLight.svg";
import useShowProduct from "../../Hook/useShowProduct";
import {ProductContext} from "../../Context/ProductContexProvider";
import {Link} from "react-router-dom";
import {ShowProductContext} from "../../Context/ShowProductContextProvider";

const PriceBox = () => {

    const {product , favorite} = useContext(ProductContext);
    const [productTop , setProductTop] = useState([])
    const {show , setShow} = useContext(ShowProductContext)

    useEffect(() => {
        setProductTop(useShowProduct(product).productTop)
    } , [product])

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
                            <div className={`d-flex align-items-center justify-content-between px-3 py-2 ${styles.priceFee}`}>
                                <div className={`opacity-50`} style={{textDecoration: 'line-through'}}>{item.price.toLocaleString()}</div>
                                <div className={`bg-danger rounded-pill px-2 shadow`}>{`${Math.round((1 - (item.price_off / item.price)) * 100)}%`}</div>
                            </div>

                            <div className={`d-flex align-items-center justify-content-start px-3 py-2`}>
                                <img height={'28px'} src={Toman} />
                                <h5 className={`mt-2`}>{item.price_off.toLocaleString()}</h5>
                            </div>
                        </div>



                        <div className={`${styles.basketBtn} d-flex align-items-center justify-content-center`}>
                            <button className={`btn w-75  btn-danger shadow py-2  `}>افزودن به سبد خرید</button>
                        </div>



                    </div>
                )
                : null
            }
        </div>
    );
};

export default PriceBox;
