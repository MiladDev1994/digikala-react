import React, {useContext, useEffect, useState} from 'react';
import styles from './Auth.module.css';
import {useNavigate} from 'react-router-dom';
import {Validate} from "./Validate";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserContext} from "../Context/UseContextProvider";

const Login = () => {

    const {user , setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const [value , setValue] = useState({
        email: "",
        password: "",
    })

    const [focus , setFocus] = useState({
        email: false,
        password: false,
    })

    const [act , setAct] = useState({
        email: false,
        password: false,
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
                email: true,
                password: true,
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
            axios.post('/api/login', {
                email: e.target[0].value,
                password: e.target[1].value,
            })
                .then((response) => {
                    setUser(response.data);
                    if(!response.data.length){
                        toast.error('ایمیل و یا رمز اشتباه است', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        setAct({
                            email: true,
                            password: true,
                        })
                        setError({
                            email: 'مجدد تلاش کنید',
                            password: 'مجدد تلاش کنید',
                        })
                    }else {
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


                        // setTimeout(() => {
                        //     navigate( -2 , { replace: true })
                            // sessionStorage.setItem('user_id' , JSON.stringify(response.data));

                        // }, 1000)

                    }

                })
                .catch(() => {
                    toast.error('اطلاعات صحیح نیست !', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                });
        }
    }
    useEffect(() => {
        setError(Validate(value , 'login'))
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



                    <button className={'btn btn-success m-auto d-block my-5 '}>ورود</button>
                </div>

            </form>
        </div>
    );
};

export default Login;
