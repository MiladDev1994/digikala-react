import React from 'react';
import styles from './Product.module.css';
import Header from "./Header/Header";
import ShowProductContextProvider from "./Context/ShowProductContextProvider";
import OtherSellers from "./OtherSellers/OtherSellers";
import About from "./About/About";
import Similar from "./Similar/Similar";

const Product = () => {

    return (
        <ShowProductContextProvider>
            <div className={'w-100'} dir={'rtl'}>
                <div className={styles.box}>
                    <Header />
                    <OtherSellers />
                    <About />
                    <Similar />
                </div>
            </div>
        </ShowProductContextProvider>
    );
};

export default Product;
