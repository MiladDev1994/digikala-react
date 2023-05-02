import React, {useContext, useEffect, useState} from 'react';
import styles from "./Header.module.css";
import ImageBox from "./ImageBox/ImageBox";
import TypesBox from "./TypesBox/TypesBox";
import PriceBox from "./PriceBox/PriceBox";
import SellerSmall from "./SellerSmall/SellerSmall";

const Header = () => {



    return (
        <div className={`w-100 d-flex mt-3 border-bottom border-2 border-secondary border-opacity-25 py-2 ${styles.header}`}>
            <ImageBox />
            <TypesBox/>
            <SellerSmall/>
            <PriceBox/>
        </div>
    );
};

export default Header;
