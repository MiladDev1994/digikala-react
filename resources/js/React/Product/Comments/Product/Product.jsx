import React, {useContext, useEffect, useState} from 'react';
import styles from "./Product.module.css";
import {ProductContext} from "../../Context/ProductContexProvider";
import Toman from "../../../../../../public/images/tomanLight.svg";
import useShowProduct from "../../Hook/useShowProduct";
import {ShowProductContext} from "../../Context/ShowProductContextProvider";

const Product = () => {

    const {product} = useContext(ProductContext)
    const [productTop , setProductTop] = useState([]);
    const {show, setShow} = useContext(ShowProductContext);

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

                            <button className={'btn btn-danger w-100 mt-3 rounded-3'}>افزودن به سبد خرید</button>
                        </div>

                        :null
                )
                :null

            }
        </>

    );
};

export default Product;
