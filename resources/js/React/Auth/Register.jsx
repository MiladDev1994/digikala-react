import React, {useEffect, useState , useContext} from 'react';
import styles from './Auth.module.css';
import {useNavigate} from 'react-router-dom';
import {Validate} from "./Validate";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserContext} from "../Context/UseContextProvider";

const Register = () => {

    const navigate = useNavigate();
    const {user , setUser} = useContext(UserContext);

    const [value , setValue] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [focus , setFocus] = useState({
        userName: false,
        email: false,
        password: false,
        confirmPassword: false,
    })

    const [act , setAct] = useState({
        userName: false,
        email: false,
        password: false,
        confirmPassword: false,
    })

    const [error , setError] = useState({});

    const valueHandler = (e) => {
        setValue({...value , [e.target.name]: e.target.value})
    }
    const focusHandler = (e) => {
        setFocus({...focus , [e.target.name]: true})
    }

    const blurHandler = (e) => {
        setFocus({...focus , [e.target.name]: false})
        setAct({...act , [e.target.name]: true})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const keys = Object.keys(error)
        if (keys.length){
            setAct({
                userName: true,
                email: true,
                password: true,
                confirmPassword: true,
            })
            toast.error('اطلاعات صحیح نیست ', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }else {
            axios.post('/api/register', {
                userName: e.target[0].value,
                email: e.target[1].value,
                password: e.target[2].value,
                confirmPassword: e.target[3].value,
            })
                .then(response => {
                    setUser(response.data);
                    toast.success('خوش آمدید', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    setTimeout(() => navigate( -1 , {replace: true}), 2000)
                })
                .catch(errore => {
                    setError({
                        email: 'شما قبلا ثبت نام کردید',
                    })
                    if (errore.response.data.errors){
                        toast.error('شما قبلا ثبت نام کردید !', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        setTimeout(() => navigate('/login') , 3000)
                    }

                });
        }
    }
    useEffect(() => {
        setError(Validate(value , 'register'))
    } , [value])
    return (
        <div className={`${styles.box}`} dir={'rtl'}>
            <form onSubmit={submitHandler} className={`${styles.form} bg-dark shadow rounded-4 text-light p-2`}>
                <div className={`d-flex align-items-center justify-content-between w-100 p-2`}>
                    <i onClick={() => navigate(-1)} className={`bi-arrow-right h4 ${styles.back}`}/>
                    <h4>ثبت نام</h4>
                    <div onClick={() => navigate('/login')} className={`${styles.enter} pb-2 px-2`}>ورود</div>
                </div>
                <ToastContainer />
                {

                }

                <div className={'px-5'}>
                    <div className={` position-relative d-flex align-items-end justify-content-center ${styles.inputBox}`}>
                        <label className={`position-absolute ${focus.userName || value.userName  ? styles.outFocus : styles.onFocus}`}>نام کاربری</label>
                        <input
                            value={value.userName}
                            onChange={valueHandler}
                            className={`${focus.userName ? (!act.userName ? 'border-secondary' : (error.userName ? 'border-danger': 'border-success')) : (!act.userName ? 'border-secondary border-opacity-50' : (error.userName ? 'border-danger' : 'border-success'))} w-100 bg-dark rounded-3 text-light text-center p-2 border  ${styles.name}`}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={'text'}
                            name={'userName'}
                        />
                        {act.userName ? <span className={`${styles.message} bg-dark p-1`}>{error.userName}</span> : null}

                    </div>

                    <div className={` position-relative d-flex align-items-end justify-content-center ${styles.inputBox}`}>
                        <label className={`position-absolute ${focus.email || value.email  ? styles.outFocus : styles.onFocus}`}>ایمیل</label>
                        <input
                            value={value.email}
                            onChange={valueHandler}
                            className={`${focus.email ? (!act.email ? 'border-secondary' : (error.email ? 'border-danger': 'border-success')) : (!act.email ? 'border-secondary border-opacity-50' : (error.email ? 'border-danger' : 'border-success'))} w-100 bg-dark rounded-3 text-light text-center p-2 border  ${styles.name}`}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={"email"}
                            name={'email'}
                        />
                        {act.email ? <span className={`${styles.message} bg-dark p-1`}>{error.email}</span> : null}
                    </div>

                    <div className={` position-relative d-flex align-items-end justify-content-center ${styles.inputBox}`}>
                        <label className={`position-absolute ${focus.password || value.password  ? styles.outFocus : styles.onFocus}`}>رمز عبور</label>
                        <input
                            value={value.password}
                            onChange={valueHandler}
                            className={`${focus.password ? (!act.password ? 'border-secondary' : (error.password ? 'border-danger': 'border-success')) : (!act.password ? 'border-secondary border-opacity-50' : (error.password ? 'border-danger' : 'border-success'))} w-100 bg-dark rounded-3 text-light text-center p-2 border  ${styles.name}`}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={'password'}
                            name={'password'}
                        />
                        {act.password ? <span className={`${styles.message} bg-dark p-1`}>{error.password}</span> : null}
                    </div>

                    <div className={` position-relative d-flex align-items-end justify-content-center ${styles.inputBox}`}>
                        <label className={`position-absolute ${focus.confirmPassword || value.confirmPassword  ? styles.outFocus : styles.onFocus}`}>تکرار رمز</label>
                        <input
                            value={value.confirmPassword}
                            onChange={valueHandler}
                            className={`${focus.confirmPassword ? (!act.confirmPassword ? 'border-secondary' : (error.confirmPassword ? 'border-danger': 'border-success')) : (!act.confirmPassword ? 'border-secondary border-opacity-50' : (error.confirmPassword ? 'border-danger' : 'border-success'))} w-100 bg-dark rounded-3 text-light text-center p-2 border  ${styles.name}`}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={'text'}
                            name={'confirmPassword'}
                        />
                        {act.confirmPassword ? <span className={`${styles.message} bg-dark p-1`}>{error.confirmPassword}</span> : null}
                    </div>

                    <button className={'btn btn-success m-auto d-block my-5 '}>ثبت نام</button>
                </div>

            </form>
        </div>
    );
};

export default Register;
