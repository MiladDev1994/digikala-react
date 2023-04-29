import React, {useContext} from 'react';
import styles from './Product.module.css';
import {FetchApiContext} from "../../Context/FetchApiContextProvider";
import {queryStringContext} from "../Context/queryStringContextProvider";
import Item from "./Item/Item";

const Product = () => {

    const variety = useContext(FetchApiContext);
    const {query , setQuery} = useContext(queryStringContext);

    const sortHandler = (data) => {
            setQuery({
                ...query,
                sort : [data.value]
            })
    }

    return (
        <div className={'px-2'}>
            <div className={`border-bottom border-secondary border-opacity-25 text-light align-items-center justify-content-start ${styles.filterBox}`} style={{height: '40px'}}>
                <div className={'d-flex align-items-center justify-content-start opacity-50'} style={{width: '120px'}}>
                    <i className={'bi-sort-down h4 me-2 mt-2'} />
                    <div style={{fontSize: '14px'}}>مرتب سازی:</div>
                </div>

                <div
                    className={`${styles.sortItem} px-3 pb-2 pt-1 rounded-3 opacity-75 position-relative ${query.sort.includes('new') ? 'text-info' : ''}`}
                    onClick={() => sortHandler({value: 'new'})}
                >جدیدترین
                </div>

                <div
                    className={`${styles.sortItem} px-3 pb-2 pt-1 rounded-3 opacity-75 position-relative ${query.sort.includes('expensive') ? 'text-info' : ''}`}
                    onClick={() => sortHandler({value: 'expensive'})}
                >ارزانترین
                </div>

                <div
                    className={`${styles.sortItem} px-3 pb-2 pt-1 rounded-3 opacity-75 position-relative ${query.sort.includes('inexpensive') ? 'text-info' : ''}`}
                    onClick={() => sortHandler({value: 'inexpensive'})}
                >گرانترین
                </div>

            </div>

            <div className={' m-auto mt-3 w-100 pb-3'}>
                {variety.length ?
                    variety.map((item , index) =>
                        <Item key={item.id} product={item} index={index} />
                    )
                    : null
                }
            </div>

        </div>
    );
};

export default Product;
