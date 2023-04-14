import React, { useState , useEffect } from 'react';
import styles from './Navbar.module.css';
import Banner from "./Banner/Banner";
import SmallMenu from "./SmallMenu/SmallMenu";
import Search from './Search/Search';
import BigMenu from "./BigMenu/BigMenu";
import axios from "axios";

const Navbar = () => {

    const [scrollY , srtScrollY] = useState(window.scrollY);
    const [scrollLocation , setScrollLocation] = useState(false);

    const scrollHandler = () => {
        srtScrollY(window.scrollY)
        if (scrollY > window.scrollY){
            setScrollLocation(false)
        }else {
            setScrollLocation(true)
        }
    }
    window.addEventListener('scroll' , scrollHandler)


    const [category , setCategory] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/category')
            .then(response => setCategory(response.data))
    } , [])

    return (
        <div className={`${styles.box} bg-dark`}>
            <div className={'w-100'} style={{position:"absolute" , zIndex:"9"}}>
                <Banner />
                <SmallMenu />
                <Search />
            </div>

            <BigMenu scroll={scrollLocation} category={category}/>
        </div>
    );
};

export default Navbar;
