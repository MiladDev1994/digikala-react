import React from 'react';
import styles from './Basket.module.css';
import Products from "./Products/Products";
import SumBox from "./SumBox/SumBox";


const Basket = () => {

    return (
        <div className={'w-100'} dir={'rtl'}>
            <div className={`${styles.box} text-light d-flex align-items-stretch`}>
                <div className={`${styles.detailBox} py-3 px-2`}>
                    <div className={`${styles.products} w-100 rounded-4 shadow py-2 px-3`}>
                        <h5 className={'opacity-50  py-2'}>سبد خرید شما</h5>
                        <Products />
                    </div>
                </div>
                <div className={`${styles.priceBox} p-2`}>
                    <div className={`w-100 rounded-4 shadow p-2 ${styles.stickyBox}`}>
                        <SumBox />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Basket;
