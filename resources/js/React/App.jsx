import React from 'react';
import { Route , Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import store from "./Redux/store";
import {Provider} from "react-redux";


const App = () => {


    return (
        <Provider store={store}>
            <div>
                < Navbar />
                <div style={{minHeight: 'calc(100vh - 120px)'}}>
                    <Routes>
                        <Route path={'/'} element={<Home />} />
                    </Routes>
                </div>

                < Footer />
            </div>
        </Provider>

    );
};

export default App;
