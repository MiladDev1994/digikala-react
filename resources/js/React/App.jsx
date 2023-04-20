import React, {useEffect} from 'react';
import RootControll from "./RootControll";
import UseContextProvider from "./Context/UseContextProvider";
import store from "./Redux/store";
import {Provider} from "react-redux";


const App = () => {

    useEffect(() => {

        if (!sessionStorage.getItem('user_id')){
            sessionStorage.setItem('user_id' , false)
        }
    })
    return (
        <Provider store={store}>
            <UseContextProvider>
                <RootControll />
            </UseContextProvider>
        </Provider>

    );
};

export default App;
