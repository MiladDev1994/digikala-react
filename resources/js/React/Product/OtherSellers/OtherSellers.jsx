import React, {useContext, useEffect, useState} from 'react';
import styles from './OtherSellers.module.css';
import useShowProduct from "../Hook/useShowProduct";
import {ProductContext} from "../Context/ProductContexProvider";
import {Link} from "react-router-dom";
import Toman from "../../../../../public/images/tomanLight.svg";
import {ShowProductContext} from "../Context/ShowProductContextProvider";
import Modal from 'react-bootstrap/Modal';

const OtherSellers = () => {

    const {product , favorite} = useContext(ProductContext);
    const [productDown , setProductDown] = useState([])
    const {show , setShow} = useContext(ShowProductContext);
    const [filter , setFilter] = useState([]);

    useEffect(() => {
        setProductDown(useShowProduct(product).productDown)
    } , [product])

    useEffect(() => {
        setFilter(productDown.filter(item => item.type.color === show))
    } , [productDown , show])


    const [showModal, setShowModal] = useState(false);

    return (
        <div className={`${styles.box} mt-3 mb-3 pb-3`}>
            {
                productDown.map(item =>
                    <div key={item.id} className={`px-3 py-1 ${styles.bigBox}`} >
                        <div className={`w-100 h-100 rounded-3 shadow ${styles.main}  align-items-center justify-content-around py-1 ${item.type.color === show ? `d-flex` : `d-none`}`}>

                            <Link style={{width: '18%'}} to={`/shop/seller-${item.user_id}`} className={`ps-3 d-flex align-items-center justify-content-start rounded-3 link-light ${styles.paddingControl} ${styles.sellerShop}`}>
                                <i className={'bi-shop h5 me-2'} />
                                <div className={''}>{item.user.seller_name}</div>
                            </Link>

                            <div style={{width: '24%'}} className={`ps-3 text-light opacity-50 d-flex align-items-center justify-content-start ${styles.paddingControl}`}>
                                <i className={'bi-check2-circle h5 me-2 mt-2'} />
                                <div className={''} style={{fontSize: '13px', whiteSpace: 'nowrap'}}>{`گارانتی ${item.warranty.period} ${item.warranty.name}`}</div>
                            </div>

                            <div style={{width: '17%'}} className={`ps-3 text-light opacity-50 d-flex align-items-center justify-content-start ${styles.paddingControl}`}>
                                <i className={'bi-truck  text-danger h5 me-2 mt-2'} />
                                <div className={''} style={{fontSize: '13px', whiteSpace: 'nowrap'}}>{`ارسال از ${item.shipping_time} روز کاری دیگر`}</div>
                            </div>

                            <div style={{width: '21%'}} className={`ps-3 text-light ${styles.priceControl}`}>
                                <div className={`d-flex align-items-center justify-content-between mt-1 ${styles.priceFee}`}>
                                    <div className={`bg-danger rounded-pill px-2 shadow`}>{`${Math.round((1 - (item.price_off / item.price)) * 100)}%`}</div>
                                    <div className={`opacity-50`} style={{textDecoration: 'line-through'}}>{item.price.toLocaleString()}</div>
                                </div>

                                <div className={`d-flex align-items-center justify-content-center px-3 `}>
                                    <div className={`mt-2`}>{item.price_off.toLocaleString()}</div>
                                    <img height={'25px'} src={Toman}  className={'mt-2'}/>
                                </div>
                            </div>

                            <div style={{width: '19%'}} className={`${styles.basketBtn} pe-3 d-flex align-items-center justify-content-end`}>
                                <button className={`btn   btn-danger shadow py-2  `}>افزودن به سبد خرید</button>
                            </div>

                        </div>
                    </div>
                )
            }

            {filter.length ?
                <div className={styles.otherSellers}>
                    <div className={'px-4 mt-2 text-info opacity-50 d-inline-block'} onClick={() => setShowModal(true)} style={{cursor: 'pointer'}}>سایر فروشندگان</div>

                    <Modal
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header className={'bg-dark border-0'}>
                            <i className={'bi-x-lg text-light bg-dark'} onClick={() => setShowModal(false)} style={{cursor: 'pointer'}}/>
                            <div className={'text-light opacity-50'}>سایر فروشندگان</div>
                        </Modal.Header>
                        <Modal.Body className={'bg-dark rounded-bottom'}>
                            <div style={{minHeight: '70vh'}} className={'overflow-scroll'} >
                                {
                                    filter.map(item =>
                                        <div key={item.id} className={'p-3 shadow border border-secondary border-opacity-25 rounded-2 mt-3 text-light'}>

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

                                            <div className={`${styles.priceControl}`}>
                                                <div className={`d-flex align-items-center justify-content-between px-3 py-2 ${styles.priceFee}`}>
                                                    <div className={`opacity-50`} style={{textDecoration: 'line-through'}}>{item.price.toLocaleString()}</div>
                                                    <div className={`bg-danger rounded-pill px-2 shadow`}>{`${Math.round((1 - (item.price_off / item.price)) * 100)}%`}</div>
                                                </div>

                                                <div className={`d-flex align-items-center justify-content-start px-3 py-2`}>
                                                    <img height={'28px'} src={Toman} />
                                                    <h5 className={`mt-2`}>{item.price_off.toLocaleString()}</h5>
                                                </div>
                                            </div>

                                            <div className={`${styles.basketBtn} d-flex align-items-center justify-content-center`}>
                                                <button className={`btn w-75  btn-danger shadow py-2  `}>افزودن به سبد خرید</button>
                                            </div>

                                        </div>

                                    )
                                }

                            </div>
                        </Modal.Body>
                    </Modal>

                </div>
                :null
            }
        </div>
    );
};

export default OtherSellers;
