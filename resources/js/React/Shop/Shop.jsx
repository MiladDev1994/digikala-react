import React, {useState} from 'react';
import styles from './Shop.module.css';
import {useLocation} from "react-router-dom";
import Product from "./Product/Product";
import Category from "./Filter/Category/Category";
import Brand from "./Filter/Brand/Brand";
import Variety from "./Filter/Variety/Variety";
import VarietyContextProvider from "./Context/VarietyContextProvider";



const Shop = () => {
    const [filterView , setFilterView] = useState(false);
    const widthHandler = () => {
        document.documentElement.scrollWidth > 1024 && setFilterView(false);
    }
    window.addEventListener('resize' , widthHandler)

    const location = useLocation();
    // console.log(location.pathname.includes('category'))

    return (
        <VarietyContextProvider>
        <div className={'w-100'} dir={'rtl'}>
            <div className={`${styles.smallFilter} p-2 bg-dark`}>
                <i className={'bi-list h3 text-light'} onClick={() =>setFilterView(preveFilterView => !preveFilterView)  }/>
            </div>
            <div className={`${styles.box} `}>

                <div className={`${styles.filterBox}`}>
                    <div className={`${filterView ? styles.filterBoxMainShow : styles.filterBoxMainHidden} ${styles.filterBoxMain} shadow p-2`}>
                        <h5 className={'text-light opacity-50 text-center py-2'}>فیلترها</h5>
                        <Category />
                        <Brand />
                        <Variety />
                    </div>
                </div>

                <div className={`${styles.productBox} `}>
                    <Product />
                </div>
            </div>

            <div className={`${styles.fake} bg-dark opacity-50`} style={filterView ? {display: 'block'} : {display: 'none'}} onClick={() =>setFilterView(preveFilterView => !preveFilterView)} />
        </div>
        </VarietyContextProvider>
    );
};

export default Shop;
