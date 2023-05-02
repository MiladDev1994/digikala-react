import React, {useCallback, useContext, useEffect, useState} from 'react';
import styles from "./TypesBox.module.css";
import {Link} from "react-router-dom";
import {ProductContext} from "../../Context/ProductContexProvider";
import useTypes from "../../Hook/useTypes";
import {ShowProductContext} from "../../Context/ShowProductContextProvider";

const TypesBox = () => {

    const {product , favorite} = useContext(ProductContext);
    const [types , setTypes] = useState([]);
    const {show , setShow} = useContext(ShowProductContext)

    useEffect(() => {
        setTypes(useTypes(product))
        product.length &&
        setShow(product[0].type.color)
    } , [product])

    return (
        <div className={`${styles.typeBox} px-3 text-light`}>
            {product.length ?
                <>
                    <Link to={`/shop/brand-${product[0].brand_id}`} className={'link-info'}>{product[0].brand.name}</Link>
                    <h5 className={'mt-2 text-light opacity-75'}>{product[0].product[0].name}</h5>
                    <div className={'w-100  mt-5'}>
                        {types.length && product.length ?
                            types.map(item =>
                                product[0].product[0].variety_type === 'color' ?
                                    <div key={item} onClick={() => setShow(item)} className={`${item === show ? `border-info` : `border-light`} d-inline-block m-2 rounded-circle border  border-2 shadow`} style={{width: '40px', height: '40px', backgroundColor: item, transition: '0.3s', cursor: 'pointer'}} />
                                    :product[0].product[0].variety_type === 'null' ? null
                                        :<div key={item} onClick={() => setShow(item)} className={`${item === show ? `border-info` : `border-secondary border-opacity-50`} d-inline-block m-2 rounded-2 border shadow`} style={{height: '40px', fontSize: '13px', transition: '0.3s', cursor: 'pointer'}}>
                                            <div className={'w-100 h-100 d-flex text-light align-items-center justify-content-center px-2'}> {item} </div>
                                        </div>
                            )
                            :null
                        }
                    </div>
                    <div className={'mt-5 px-4 py-1 d-flex opacity-50'}>
                        <div style={{width: '50px'}}>{` طول : `}</div>
                        <div className={''}>{ product[0].product[0].height} سانتی متر </div>
                    </div>
                    <div className={'mt-2 px-4 py-1 d-flex opacity-50'}>
                        <div style={{width: '50px'}}>{` عرض : `}</div>
                        <div className={''}>{ product[0].product[0].width} سانتی متر </div>
                    </div>
                    <div className={'mt-2 px-4 py-1 d-flex opacity-50'}>
                        <div style={{width: '50px'}}>{` ارتفاع : `}</div>
                        <div className={''}>{ product[0].product[0].depth} سانتی متر </div>
                    </div>
                    <div className={'mt-2 px-4 py-1 d-flex opacity-50'}>
                        <div style={{width: '50px'}}>{` وزن : `}</div>
                        <div className={''}>{ product[0].product[0].Weight} گرم </div>
                    </div>
                </>
                : null
            }


        </div>
    );
};

export default TypesBox;
