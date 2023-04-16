import React from 'react';
import { Route , Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";


const App = () => {


    return (
        <div>
            < Navbar />
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
