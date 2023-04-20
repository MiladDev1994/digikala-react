import React, {useEffect} from 'react';
import styles from './App.module.css';
import { Route , Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import {useSelector , useDispatch} from "react-redux";
import {fetchVarietiesApi} from "./Redux/Varieties/VarietiesAction";
import {BeatLoader} from "react-spinners";


const Last = () => {

    const loading = useSelector(item => item.varieties.data);
    const dispatch = useDispatch();
    // console.log(loading)

    useEffect(() => {
        dispatch(fetchVarietiesApi());
    } , [])
    return (
        <>
            {loading.length ?
                <div>
                    < Navbar />
                    <div className={styles.height}>
                        <div className={styles.headerFake} />
                        <Routes>
                            <Route path={'/'} element={<Home />} />
                        </Routes>
                    </div>
                    < Footer />
                </div>
                :
                <div className={'position-fixed bg-dark d-flex align-items-center justify-content-center'} style={{width: '100vw', height: '100vh'}}>

                    <BeatLoader
                        color="red"
                        cssOverride={{}}
                        loading
                        speedMultiplier={1}
                        size={25}
                        margin={10}
                    />
                </div>

            }
        </>

    );
};

export default Last;
