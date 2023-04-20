import React from 'react';
import styles from './App.module.css';
import { Route , Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import store from "./Redux/store";
import {Provider} from "react-redux";


const Last = () => {


    return (
        <Provider store={store}>
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
        </Provider>

    );
};

export default Last;
