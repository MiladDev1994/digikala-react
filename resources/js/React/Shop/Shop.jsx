import React, {useEffect, useState , useContext} from 'react';
import styles from './Shop.module.css';
import {useLocation , useParams} from "react-router-dom";
import Product from "./Product/Product";
import Category from "./Filter/Category/Category";
import Brand from "./Filter/Brand/Brand";
import Variety from "./Filter/Variety/Variety";
import Shipping from "./Filter/Shipping/Shipping";
import SellSpecial from "./Filter/SellSpecial/SellSpecial";
import Price from "./Filter/Price/Price";
import PageName from "./PageName/PageName";
import FetchApiContextProvider from "../Context/FetchApiContextProvider";
import {queryStringContext} from "./Context/queryStringContextProvider";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Shop = () => {

    const {query , setQuery} = useContext(queryStringContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [filterView , setFilterView] = useState(false);
    const params = useParams();
    const types = params.id.split('-')[0];

    const widthHandler = () => {
        document.documentElement.scrollWidth > 1024 && setFilterView(false);
    }

    const sortHandler = (data) => {
        setQuery({
            ...query,
            sort : [data.value]
        })
    }

    useEffect(() => {
        window.addEventListener('resize' , widthHandler)
    } , [])

    return (
        <FetchApiContextProvider>
            <div className={'w-100'} dir={'rtl'}>
                <div className={`${styles.smallFilter} p-2 bg-dark align-items-center justify-content-start position-relative`}>
                    <div className={`d-flex align-items-center justify-content-start text-light px-2`} style={{width: '100px' , cursor: 'pointer'}} onClick={() => setFilterView(prevFilterView => !prevFilterView)  }>
                        <i className={'bi-sliders h5 me-1 mt-2'}/>
                        <div className={''} style={{fontSize: '15px'}}>فیلترها</div>
                    </div>

                    <div className={`d-flex align-items-center justify-content-start text-light px-2`} onClick={handleShow} style={{width: '130px', cursor: 'pointer'}}>
                        <i className={'bi-sort-down h4 me-1 mt-3'}/>
                        <div className={''} style={{fontSize: '15px'}}>مرتب سازی</div>
                    </div>


                    <Modal show={show} onHide={handleClose} className={''}>
                        <div className={'w-100 h-100 bg-dark text-light rounded-top d-flex'}>
                            <i className={'bi-x-lg d-flex align-items-center justify-content-center'} onClick={handleClose} style={{width: '40px', height: '40px', cursor: 'pointer'}}/>
                            <div className={'bg-dark w-100 d-flex align-items-center justify-content-center ps-5'}> مرتب سازی </div>
                        </div>
                        <Modal.Body  style={{height: '140px'}} className={'bg-dark rounded-bottom text-light'}>


                            <div
                                className={`${styles.sortItem} px-3 pb-2 pt-1 rounded-3 opacity-75 position-relative ${query.sort.includes('new') ? 'bg-primary' : ''}`}
                                onClick={() => sortHandler({value: 'new'})}
                            >جدیدترین
                            </div>

                            <div
                                className={`${styles.sortItem} px-3 pb-2 pt-1 rounded-3 opacity-75 position-relative ${query.sort.includes('expensive') ? 'bg-primary' : ''}`}
                                onClick={() => sortHandler({value: 'expensive'})}
                            >ارزانترین
                            </div>

                            <div
                                className={`${styles.sortItem} px-3 pb-2 pt-1 rounded-3 opacity-75 position-relative ${query.sort.includes('inexpensive') ? 'bg-primary' : ''}`}
                                onClick={() => sortHandler({value: 'inexpensive'})}
                            >گرانترین
                            </div>


                        </Modal.Body>

                    </Modal>

                </div>

                <PageName />

                <div className={`${styles.box} `}>

                    <div className={`${styles.filterBox} pb-2`}>
                        <div className={`${filterView ? styles.filterBoxMainShow : styles.filterBoxMainHidden} ${styles.filterBoxMain} shadow p-2`}>
                            <i className={`bi-x-lg text-light position-absolute px-2 py-1 rounded-circle ${styles.closeBtn}`} onClick={() => setFilterView(false)}/>
                            <h4 className={'text-light opacity-50 text-center pb-2'}>فیلترها</h4>
                            {types !== 'category' ?  <Category /> : null}
                            {types !== 'brand' ?  <Brand /> : null}
                            <Variety />
                            <Shipping />
                            <SellSpecial />
                            <Price />
                        </div>
                    </div>

                    <div className={`${styles.productBox} `}>
                        <Product />
                    </div>
                </div>

                <div className={`${styles.fake} bg-dark opacity-50`} style={filterView ? {display: 'block'} : {display: 'none'}} onClick={() =>setFilterView(prevFilterView => !prevFilterView)} />
            </div>
        </FetchApiContextProvider>

    );
};

export default Shop;
