import React from 'react';
import RootControll from "./RootControll";
import UseContextProvider from "./Context/UseContextProvider";
import store from "./Redux/store";
import {Provider} from "react-redux";

const App = () => {

    return (
        <Provider store={store}>
            <UseContextProvider>
                <RootControll />
            </UseContextProvider>
        </Provider>

    );
};

export default App;
