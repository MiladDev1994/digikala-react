import React from 'react';
import styles from './Footer.module.css';
import logo from '../../../../public/image/logo.svg';

const Footer = () => {


    const scrollHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className={'container-fluid bg-dark p-0'} dir={'rtl'}>
            <div className={`${styles.box} m-auto p-3`}>
                <div className={'row text-light h-100'}>
                    <div className={`${styles.logo} col-6 col-lg-2 d-flex align-items-center justify-content-center flex-column`}>
                        <img src={logo} />
                        <p className={styles.phone}> تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ </p>
                    </div>
                    <div className={`${styles.Btn} col-6 d-lg-none d-flex align-items-center justify-content-center`}>
                        <button
                            className={'d-flex align-items-center justify-content-center btn btn-dark p-2 border border-secondary border-opacity-50 shadow'}
                            onClick={scrollHandler}
                        >
                            <div>بازگشت به بالا</div>
                            <i className={'bi-arrow-up ms-2'} />
                        </button>
                    </div>
                    <div className={`${styles.text} col-12 col-lg-8 d-flex align-items-center justify-content-center text-center opacity-50`}>
                        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
                    </div>
                    <div className={`${styles.Btn}  d-none col-lg-2 d-lg-flex align-items-center justify-content-center`}>
                        <button
                            className={'d-flex align-items-center justify-content-center btn btn-dark p-2 border border-secondary border-opacity-50 shadow'}
                            onClick={scrollHandler}
                        >
                            <div>بازگشت به بالا</div>
                            <i className={'bi-arrow-up ms-2'} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`w-100 bg-dark ${styles.under}`} style={{height: '65px'}}/>
        </div>
    );
};

export default Footer;
