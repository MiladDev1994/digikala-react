import React, {useContext, useEffect} from 'react';
import Last from "./Last";
import {Route , Routes , Navigate} from "react-router-dom";
import Login from "./Auth/Login"
import Register from "./Auth/Register";
import {UserContext} from "./Context/UseContextProvider";
import {useDispatch} from "react-redux";
import {fetchBasketStartApi} from "./Redux/BasketStart/BasketStartAction";



const RootControll = () => {

    const dispatch = useDispatch();
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        user.length && dispatch(fetchBasketStartApi());
    } , [user])

    return (
            <Routes>
                <Route path={'/*'} element={ <Last /> } />
                <Route path={'/login'} element={ user.length ?  <Navigate to={'/'} /> : <Login /> } />
                <Route path={'/register'} element={ user.length ?  <Navigate to={'/'} /> : <Register /> } />
            </Routes>
    );
};

export default RootControll;
