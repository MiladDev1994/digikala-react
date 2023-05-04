import React, { useState } from 'react';
import styles from './Item.module.css';
import {Link} from "react-router-dom";
import Toman from '../../../../../../public/images/tomanLight.svg';

const Item = ({item , index}) => {

    const [href , setHref] = useState(true);
    return (
        <Link
            key={item.id}

            to={href ? `http://127.0.0.1:8000/product/${item.product.id}` : null}
            target={href ? '_blank' : null}
            className={`${index === 0 ? 'rounded-start' : index === 19 ? 'rounded-end' : ''} border-end border-secondary border-opacity-10 p-2 h-100 position-absolute text-light ${styles.items}`}
            style={{right:`${index * 182}px`}}
            onMouseDown={() => setHref(true)}
            onMouseMove={() => setHref(false)}
        >
            <div style={{width: '100%', height: '164px'}}>
                <img width={'100%'} className={'rounded-3'} src={`http://127.0.0.1:8000/images/${item.product.image.split(',')[0]}`} />
            </div>

            <div className={`${styles.detail} mt-4`}>
                <div className={`d-flex align-items-center justify-content-between`}>
                    {item.variety.price !== item.variety.price_off ?
                        <div className={`${styles.priceOff} bg-danger text-light px-2 rounded-pill`}>{`${Math.round((1 - (item.variety.price_off / item.variety.price)) * 100)}%`}</div>
                        : <div className={`${styles.priceOff}`} />
                    }
                    <div className={`d-flex`}>
                        <div style={{fontWeight: '600'}}>{(item.variety.price_off / 10).toLocaleString()}</div>
                        <img width={'25px'} src={Toman}/>
                    </div>
                </div>
                {
                    item.variety.price !== item.variety.price_off ?
                        <div className={`${styles.price} text-center mt-2 opacity-25`}>{item.variety.price.toLocaleString()}</div>
                        : null
                }
            </div>
        </Link>
    );
};

export default Item;
