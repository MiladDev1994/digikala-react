import React, { useState} from 'react';
import styles from './Navbar.module.css';
import Banner from "./Banner/Banner";
import SmallMenu from "./SmallMenu/SmallMenu";
import Search from './Search/Search';
import BigMenu from "./BigMenu/BigMenu";

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


    return (
        <div className={`${styles.box} bg-dark`}>
            <div className={'w-100'} style={{position:"absolute" , zIndex:"9"}}>
                <Banner />
                <SmallMenu />
                <Search />
            </div>

            <BigMenu scroll={scrollLocation}/>
        </div>
    );
};

export default Navbar;
