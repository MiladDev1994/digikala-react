import React from 'react';
import { Route , Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import store from "./Redux/store";
import {Provider} from 'react-redux';

const App = () => {


    return (
        <div>

            <Provider store={store}>
                < Navbar />
                <Routes>
                    <Route path={'/'} element={<Home />} />
                </Routes>
            </Provider>

        </div>
    );
};

export default App;
