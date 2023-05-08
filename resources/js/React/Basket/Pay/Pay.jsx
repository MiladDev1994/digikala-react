import React, {useContext, useEffect, useState} from 'react';
import styles from "./Pay.module.css";
import Address from "./Address/Address";
import {UserContext} from "../../Context/UseContextProvider";
import axios from "axios";

const Pay = ({basket}) => {

    const {user} = useContext(UserContext)
    const [address , setAddress] = useState(user[0].address)
    const [phone , setPhone] = useState(user[0].phone)
    const [maxShip , setMaxShip] = useState(false);


    const [date , setDate] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/date')
            .then(response => setDate(response.data))

        let shipp = []
        basket.map(item => shipp.push(Number(item.variety.shipping_time)))
        setMaxShip(Math.max(...shipp))
    } , [])

    useEffect(() => {

    } , [date])
    console.log(maxShip)


    return (
        <div className={'w-100'} dir={'rtl'}>
            <form className={`${styles.box} text-light d-flex align-items-stretch`}>
                <div className={`${styles.detailBox} py-3 px-2`}>
                    <div className={`${styles.products} w-100 rounded-4 shadow py-2 px-3`}>
                        <h5 className={'opacity-50  py-2'}>اطلاعات تکمیلی</h5>
                        {/*<Address />*/}
                        <div className={'w-100 p-2 border-bottom border-secondary border-opacity-25'}>
                            <h5 className={'px-3 opacity-75'} style={{fontSize: '16px'}}>نحوه پرداخت</h5>

                            <div className={'p-2 d-flex'}>
                                <label className={'px-3 opacity-25'} style={{cursor: 'pointer'}}>
                                    <input type={'radio'} className={'form-check-input mt-2 me-3'} name={'payStatus'} disabled/>
                                    پرداخت آنلاین
                                </label>
                            </div>

                            <div className={'p-2 d-flex'}>
                                <label className={'px-3 opacity-75'} style={{cursor: 'pointer'}}>
                                    <input type={'radio'} className={'form-check-input mt-2 me-3 shadow'} name={'payStatus'}/>
                                    پرداخت درب منزل
                                </label>
                            </div>
                        </div>

                        <div className={'w-100 px-2 p-3 border-bottom border-secondary border-opacity-25 mt-2'}>
                            <h5 className={'px-3 opacity-75'} style={{fontSize: '16px'}}>آدرس</h5>
                            <input value={address} onChange={e => setAddress(e.target.value)} className={'w-100 input-group-text mt-4 bg-dark border-secondary border-opacity-50 shadow text-light text-opacity-75 text-start'} style={{outline: 'none'}}/>
                        </div>

                        <div className={'w-100 px-2 py-3 border-bottom border-secondary border-opacity-25 mt-2'}>
                            <h5 className={'px-3 opacity-75'} style={{fontSize: '16px'}}>تلفن</h5>
                            <input value={phone} onChange={e => setPhone(e.target.value)} className={'w-100 input-group-text mt-4 bg-dark border-secondary border-opacity-50 shadow text-light text-opacity-75 text-start'} style={{outline: 'none'}}/>
                        </div>

                        {/*<div className={'w-100 px-2 py-3 border-bottom border-secondary border-opacity-25 mt-2'}>*/}
                        {/*    <h5 className={'px-3 opacity-75'} style={{fontSize: '16px'}}>تاریخ و ساعت تحویل</h5>*/}
                        {/*    <input value={user[0].phone} onChange={1} className={'w-100 input-group-text mt-4 bg-dark border-secondary border-opacity-50 shadow text-light text-opacity-75 text-start'} style={{outline: 'none'}}/>*/}
                        {/*</div>*/}
                        <Address />

                    </div>
                </div>
                <div className={`${styles.priceBox} p-2`}>
                    <div className={`w-100 rounded-4 shadow p-2 ${styles.stickyBox}`}>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Pay;
