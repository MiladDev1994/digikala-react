import React from 'react';
import Last from "./Last";
import {Route , Routes} from "react-router-dom";
import Login from "./Auth/Login"
import Register from "./Auth/Register";


const App = () => {


    return (
        <Routes>
            <Route path={'/*'} element={< Last />} />
            <Route path={'/login'} element={< Login />} />
            <Route path={'/register'} element={<Register />} />
        </Routes>


    );
};

export default App;
