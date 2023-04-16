import React, { useState , useEffect } from 'react';
import styles from './Navbar.module.css';
import Banner from "./Banner/Banner";
import SmallMenu from "./SmallMenu/SmallMenu";
import Search from './Search/Search';
import BigMenu from "./BigMenu/BigMenu";
import axios from "axios";
import MenuContextProvider from "./Context/MenuContextProvider";
import store from "./Redux/store";
import {Provider} from "react-redux";


const Navbar = () => {

    // const [menu , setMenu] = useState(false);



    const [category , setCategory] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/category')
            .then(response => setCategory(response.data))
    } , [])

    return (
        <Provider store={store}>
            <MenuContextProvider>
                <div className={`${styles.box} bg-dark`}>
                    <div className={'w-100'} style={{position:"absolute" , zIndex:"9"}}>
                        <Banner />
                        <SmallMenu />
                        <Search />
                    </div>

                    <BigMenu category={category}/>
                </div>
            </MenuContextProvider>
        </Provider>


    );
};

export default Navbar;
