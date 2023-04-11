import React from 'react';
import styles from './Navbar.module.css';
import Banner from "./Banner/Banner";
import SmallMenu from "./SmallMenu/SmallMenu";
import BigMenu from './BigMenu/BigMenu';

const Navbar = () => {


    return (
        <div className={`${styles.box} bg-dark`}>
            <Banner />
            <SmallMenu />
            <BigMenu />
        </div>
    );
};

export default Navbar;
