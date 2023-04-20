import React, {useState} from 'react';
import styles from './Auth.module.css';


const Register = () => {

    const [focus , setFocus] = useState({
        userName: false,
        email: false,
        password: false,
        confirmPassword: false,
    })

    const focusHandler = (e) => {
        setFocus({...focus , [e.target.name]: true})
    }

    const blurHandler = (e) => {
        setFocus({...focus , [e.target.name]: false})
    }
    return (
        <div className={`${styles.box}`} dir={'rtl'}>
            <form className={`${styles.form} bg-dark shadow rounded-4 text-light p-2`}>
                <div className={`d-flex align-items-center justify-content-between w-100 p-2`}>
                    <i onClick={1} className={'bi-arrow-right h3'}/>
                    <h4>ثبت نام</h4>
                    <button className={'btn btn-secondary p-1'}>ورود</button>
                </div>


                <div className={'px-5'}>
                    <div className={` position-relative d-flex align-items-end justify-content-center ${styles.inputBox}`}>
                        <label className={`position-absolute ${!focus.userName ? styles.onFocus : styles.outFocus}`}>نام کاربری</label>
                        <input
                            className={`${focus.userName ? `border border-info` : ``} w-100 bg-dark rounded-3 text-light p-2 border border-secondary border-opacity-50 ${styles.name}`}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={'text'}
                            name={'userName'}/>
                    </div>

                    <div className={` position-relative d-flex align-items-end justify-content-center ${styles.inputBox}`}>
                        <label className={`position-absolute ${!focus.email ? styles.onFocus : styles.outFocus}`}>ایمیل</label>
                        <input
                            className={`${focus.email ? `border border-info` : ``} w-100 bg-dark rounded-3 text-light p-2 border border-secondary border-opacity-50 ${styles.name}`}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={'email'}
                            name={'email'}/>
                    </div>

                    <div className={` position-relative d-flex align-items-end justify-content-center ${styles.inputBox}`}>
                        <label className={`position-absolute ${!focus.password ? styles.onFocus : styles.outFocus}`}>رمز عبور</label>
                        <input
                            className={`${focus.password ? `border border-info` : ``} w-100 bg-dark rounded-3 text-light p-2 border border-secondary border-opacity-50 ${styles.name}`}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={'text'}
                            name={'password'}/>
                    </div>

                    <div className={` position-relative d-flex align-items-end justify-content-center ${styles.inputBox}`}>
                        <label className={`position-absolute ${!focus.confirmPassword ? styles.onFocus : styles.outFocus}`}>تکرار رمز</label>
                        <input
                            className={`${focus.confirmPassword ? `border border-info` : ``} w-100 bg-dark rounded-3 text-light p-2 border border-secondary border-opacity-50 ${styles.name}`}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={'text'}
                            name={'confirmPassword'}/>
                    </div>

                    <button className={'btn btn-primary m-auto d-block my-5 '}>ثبت نام</button>
                </div>

            </form>
        </div>
    );
};

export default Register;
