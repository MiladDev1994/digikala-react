import React from 'react';
import styles from './Servises.module.css';
import busLogo from '../../../../../public/images/home/other/6c69096a524add2d4646cd162dfa5f66d4ddceac_1668952039.png'
import plusLogo from '../../../../../public/images/home/other/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png'
import DSLogo from '../../../../../public/images/home/other/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png'
import statusLogo from '../../../../../public/images/home/other/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png'
import payLogo from '../../../../../public/images/home/other/ac127167132653d14c758748b07824a6a7643a31_1663444619.png'
import jetLogo from '../../../../../public/images/home/other/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png'
import charkhLogo from '../../../../../public/images/home/other/f18a182f7c300af9ce3eb8f47201ef340fc87eb3_1670930133.png'

const Servises = () => {
    return (
        <div className={`container-fluid px-0 py-4 text-light ${styles.Box}`}>
            <div className={'container '}>
                <div className={'row'}>
                    <div className={'col-12 col-lg-6 d-flex align-items-center justify-content-center'}>
                        <div className={'row d-flex align-items-center justify-content-between w-100'}>
                            <div className={'col-3 d-flex align-items-center justify-content-center flex-column'}>
                                <i className={'bi-three-dots bg-secondary p-3 h4 rounded-pill'} style={{width: '55px', height: '55px'}}/>
                                <p className={`mt-2 ${styles.P}`}>بیشتر</p>
                            </div>
                            <div className={'col-3 d-flex align-items-center justify-content-center flex-column'}>
                                <img width={'55px'} src={statusLogo}/>
                                <p className={`mt-3 ${styles.P}`}>ماموریت ها</p>
                            </div>
                            <div className={'col-3 d-flex align-items-center justify-content-center flex-column'}>
                                <img width={'55px'} src={plusLogo}/>
                                <p className={`mt-3 ${styles.P}`}>دیجی پلاس</p>
                            </div>
                            <div className={'col-3 d-flex align-items-center justify-content-center flex-column'}>
                                <img width={'55px'} src={charkhLogo}/>
                                <p className={`mt-3 ${styles.P}`}>چرخ و بخت</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 col-lg-6 d-flex align-items-center justify-content-center '}>
                        <div className={'row d-flex align-items-center justify-content-between w-100'}>
                            <div className={'col-3 d-flex align-items-center justify-content-center flex-column'}>
                                <img width={'55px'} src={busLogo}/>
                                <p className={`mt-3 ${styles.P}`}>خرید عمده</p>
                            </div>
                            <div className={'col-3 d-flex align-items-center justify-content-center flex-column'}>
                                <img width={'55px'} src={payLogo}/>
                                <p className={`mt-3 ${styles.P}`}>خرید اقساطی</p>
                            </div>
                            <div className={'col-3 d-flex align-items-center justify-content-center flex-column'}>
                                <img width={'55px'} src={DSLogo}/>
                                <p className={`mt-3 ${styles.P}`}>حراج استایل</p>
                            </div>
                            <div className={'col-3 d-flex align-items-center justify-content-center flex-column'}>
                                <img width={'55px'} src={jetLogo}/>
                                <p className={`mt-3 ${styles.P}`}>دیجی‌کالا جت</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Servises;
