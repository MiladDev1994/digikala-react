import React, {useContext} from 'react';
import Last from "./Last";
import {Route , Routes , Navigate} from "react-router-dom";
import Login from "./Auth/Login"
import Register from "./Auth/Register";
import {UserContext} from "./Context/UseContextProvider";



const RootControll = () => {

    const {user, setUser} = useContext(UserContext);

    return (
            <Routes>
                <Route path={'/*'} element={ <Last /> } />
                <Route path={'/login'} element={ user.length ?  <Navigate to={'/'} /> : <Login /> } />
                <Route path={'/register'} element={ user.length ?  <Navigate to={'/'} /> : <Register /> } />
            </Routes>
    );
};

export default RootControll;
