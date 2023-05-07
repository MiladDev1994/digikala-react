import React from 'react';
import styles from './Item.module.css';
import {Link} from "react-router-dom";
import Toman from '../../../../../../public/images/tomanLight.svg'

const Item = ({product , index}) => {
    return (
        <div className={` ${styles.box}`}>
            <Link to={`/product/${product.product[0].id}`} className={`rounded-3 p-2 ${styles.item}`}>
                <div className={`bg-white ${styles.imageBox}`}>
                    <img height={'100%'}  src={`http://127.0.0.1:8000/images/${product.product[0].image.split(',')[0]}`}/>
                </div>
                <div className={styles.detaileBox}>
                    <p className={`text-light ${styles.name} opacity-75 m-0 mt-2`}>{product.product[0].name}</p>

                    <div className={`${styles.price_offBox} d-flex align-items-center justify-content-between text-light px-2 w-100 mt-0 `}>
                        {product.price_off !== product.price ?
                            <>
                                <div className={`${styles.off} bg-danger px-2 rounded-pill`}>{`${Math.round((1 - (product.price_off / product.price)) * 100)}%`}</div>
                                <div className={`opacity-50 ${styles.priceOff}`}>{(product.price / 10).toLocaleString()}</div>
                            </>
                            : null
                        }

                    </div>

                    <div className={`d-flex align-items-center justify-content-center text-light ${styles.price}`}>
                        <h5 className={'mt-2'}>{(product.price_off / 10).toLocaleString()}</h5>
                        <img src={Toman}/>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default Item;
