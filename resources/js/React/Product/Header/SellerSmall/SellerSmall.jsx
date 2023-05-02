import React, {useContext, useEffect, useState} from 'react';
import styles from "./SellerSmall.module.css";
import {Link} from "react-router-dom";
import {ProductContext} from "../../Context/ProductContexProvider";
import {ShowProductContext} from "../../Context/ShowProductContextProvider";
import useShowProduct from "../../Hook/useShowProduct";

const SellerSmall = () => {

    const {product , favorite} = useContext(ProductContext);
    const [productTop , setProductTop] = useState([])
    const {show , setShow} = useContext(ShowProductContext)

    useEffect(() => {
        setProductTop(useShowProduct(product).productTop)
    } , [product])

    return (
        <div className={`${styles.minPriceBox} mt-4`} dir={'ltr'}>
            {
                productTop.map(item =>
                    <div key={item.id} className={`${styles.itemPrice} text-light rounded-4  px-3 ${item.type.color === show ? `d-flex flex-column` : `d-none`}`}>
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
                    </div>
                )
            }
        </div>
    );
};

export default SellerSmall;
