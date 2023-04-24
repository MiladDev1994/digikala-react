import React, {useEffect} from 'react';
import styles from './App.module.css';
import { Route , Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import {useSelector , useDispatch} from "react-redux";
import {fetchHomeViewApi} from "./Redux/HomeView/HmeViewAction";
import {BeatLoader} from "react-spinners";
import Article from "./Article/Article";
import Shop from "./Shop/Shop";
import QueryStringContextProvider from "./Shop/Context/queryStringContextProvider";

const Last = () => {

    const loading = useSelector(item => item.homeView.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHomeViewApi());
    } , [])
    return (
        <QueryStringContextProvider>
            {loading.length ?
                <div>
                    < Navbar />
                    <div className={styles.height}>
                        <div className={styles.headerFake} />
                        <Routes>
                            <Route path={'/'} element={<Home />} />
                            <Route path={'/article/:id'} element={ <Article /> } />
                            <Route path={'/shop/:id'} element={ <Shop /> } />
                            <Route path={'/shop/moreSell'} element={  <Shop />  } />
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
        </QueryStringContextProvider>

    );
};

export default Last;
