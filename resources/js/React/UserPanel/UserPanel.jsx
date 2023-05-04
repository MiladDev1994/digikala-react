import React, {useContext, useEffect} from 'react';
import styles from './UserPanel.module.css';
import userLogo from '../../../../public/image/df110dcf.svg'
import {UserContext} from "../Context/UseContextProvider";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import axios from "axios";
import canceled from '../../../../public/images/userPanel/status-returned.svg'
import sending from '../../../../public/images/userPanel/status-processing.svg'
import sent from '../../../../public/images/userPanel/status-delivered.svg'
import Sending from "./Orders/Sending/Sending";
import Sent from "./Orders/Sent/Sent";
import Canceled from "./Orders/Canceled/Canceled";
import {useSelector , useDispatch} from "react-redux";
import {fetchOrderApi} from "../Redux/Order/OrderAction";
import Favorite from "./Favorite/Favorite";
import {OrderContext} from "../Context/OrderContextProvider";

const UserPanel = () => {

    const {sendingOrder , setSendingOrder} = useContext(OrderContext)
    const {user , setUser} = useContext(UserContext)
    const dispatch = useDispatch();

    const sendingCount = useSelector(item => item.order.data).filter(element => element.order_status === 'sending').length;
    const sentCount = useSelector(item => item.order.data).filter(element => element.order_status === 'sent').length;
    const canceledCount = useSelector(item => item.order.data).filter(element => element.order_status === 'canceled').length;
    const location = useLocation();

    console.log(sendingOrder)
    const logOutHandler = () => {
        axios.post('/api/logOut' , {
            logOut: true
        })
            .then(response => {
                setUser(response.data)
            })
            .catch(error => console.log('no'))
    }

    useEffect(() => {
        dispatch(fetchOrderApi())
    } , [])

    return (
            <div className={'w-100'} dir={'rtl'}>
                <div className={`${styles.box} p-2`}>

                    <div className={`${styles.userDataBox} p-2`}>
                        <div className={`${styles.userDadeSticky} text-light p-2 rounded-4 shadow`}>


                            <div className={`w-100  p-2 border-bottom border-secondary border-opacity-25`}>
                                <div className={`w-100 d-flex align-items-center justify-content-between`}>
                                    <div className={`d-flex align-items-center justify-content-start`}>
                                        <img width={'42px'} src={userLogo}/>
                                        <div className={'px-3'}>
                                            <h4 className={'m-0'}>{user[0].name}</h4>
                                            <div className={'opacity-50'}>{user[0].phone}</div>
                                        </div>
                                    </div>
                                    <i className={'bi-pencil  text-info h5 mt-2'} />
                                </div>
                                {user[0].isSeller ?
                                    <div className={'w-100 py-2'} style={{fontSize: '14px'}}>
                                        <Link to={'/seller'} className={'link-info'}>پنل فروشندگی</Link>
                                    </div>

                                    : null
                                }
                            </div>

                            <Link to={'sending'} className={`d-flex align-items-center justify-content-start ${location.pathname.includes('order') ? `text-danger` : `text-light`}  opacity-75 mt-2 rounded-3 px-2 ${styles.linkHover}`}>
                                <i className={'bi-bag py-2 h5 px-2'} />
                                <h5 className={''}>سفارشات</h5>
                            </Link>

                            <Link to={'favorite'} className={`d-flex align-items-center justify-content-start ${location.pathname.includes('favorite') ? `text-danger` : `text-light`} opacity-75 rounded-3 px-2 ${styles.linkHover}`}>
                                <i className={'bi-heart py-2 h5 px-2'} />
                                <h5 className={''}>علاقه مندی</h5>
                            </Link>

                            <Link to={'comment'} className={`d-flex align-items-center justify-content-start ${location.pathname.includes('comment') ? `text-danger` : `text-light`} opacity-75 rounded-3 px-2 ${styles.linkHover}`}>
                                <i className={'bi-chat  py-2 h5 px-2'} />
                                <h5 className={''}>دیدگاه</h5>
                            </Link>

                            <div onClick={logOutHandler} className={`d-flex align-items-center justify-content-start text-light opacity-75 rounded-3 px-2 ${styles.linkHover}`}>
                                <i className={'bi-box-arrow-right  py-2 h5 px-2'} />
                                <h5 className={''}>خروج</h5>
                            </div>

                        </div>
                    </div>


                    <div className={`${styles.detailBox} mt-2 px-2`}>
                        <div className={`w-100 px-2 rounded-4 shadow ${styles.allOrder}`}>
                            <h5 className={'text-light text-start d-inline-block border-2 border-bottom border-danger px-2 pb-3 pt-2 opacity-50'}>سفارش&zwnj;های من</h5>
                            <div className={'d-flex align-items-center justify-content-around  py-3'} style={{fontSize: '13px'}}>
                                <Link to={'order/sending'} className={`d-flex align-items-center justify-content-center  flex-column text-light ${location.pathname.includes('sending') && `bg-dark rounded-3 shadow`} p-2 px-3`} style={{transition: '0.3s'}}>
                                    <img src={sending}/>
                                    <p className={'opacity-50'}>{`جاری ${sendingOrder.action ? sendingOrder.data.filter(element => element.order_status === 'sending').length : sendingCount} عدد`}</p>
                                </Link>

                                <Link to={'order/sent'} className={`d-flex align-items-center justify-content-center  flex-column text-light ${location.pathname.includes('sent') && `bg-dark rounded-3 shadow`} p-2`} style={{transition: '0.3s'}}>
                                    <img src={sent}/>
                                    <p className={'opacity-50'}>{`ارسال شده ${sendingOrder.action ? sendingOrder.data.filter(element => element.order_status === 'sent').length : sentCount} عدد`}</p>
                                </Link>

                                <Link to={'order/canceled'} className={`d-flex align-items-center justify-content-center  flex-column text-light ${location.pathname.includes('canceled') && `bg-dark rounded-3 shadow`} p-2`} style={{transition: '0.3s'}}>
                                    <img src={canceled}/>
                                    <p className={'opacity-50'}>{`لغو شده ${sendingOrder.action ? sendingOrder.data.filter(element => element.order_status === 'canceled').length : canceledCount} عدد`}</p>
                                </Link>
                            </div>
                        </div>

                        <div className={`${styles.component} mt-2 rounded-4 shadow text-light p-0`} style={{minHeight: '200px'}}>
                            <Routes>
                                <Route path={'order/sending'} element={< Sending/>} />
                                <Route path={'order/sent'} element={< Sent/>} />
                                <Route path={'order/canceled'} element={< Canceled/>} />
                                <Route path={'favorite'} element={< Favorite/>} />
                            </Routes>

                        </div>
                    </div>

                </div>
            </div>

    );
};

export default UserPanel;
