import React, {useEffect, useRef, useState} from 'react';
import styles from './BigMenu.module.css';
import digiLogo from '../../../../../public/image/logo.svg';

const BigMenu = () => {
    const logoWidth = useRef();
    const basketWidth = useRef();
    const [windowWidth , setWindowWidth] = useState(window.screen.width);
    const [searchWidth , setSearchWidth] = useState(0);

    const windowHandler = () => {
        setWindowWidth(window.screen.width)

    }
    window.addEventListener('resize' , windowHandler);


    // useEffect(() => {
    //     let qqq = basketWidth.current.scrollWidth;
    //     let www = logoWidth.current.scrollWidth;
    //     let rrr = windowWidth;
    //     let ttt = rrr - www - qqq - 120 + 'px';
    // } , [windowWidth])
    return (
        <div className={`text-light p-4 ${styles.searchBox}`} dir={'rtl'}>
            <div ref={logoWidth} className={`ms-5 float-end ${styles.logoBox}`}>
                <img src={digiLogo} alt={'logo'} />
            </div>
            <div className={"float-end bg-primary"} style={windowWidth > 1024 ? {width:`calc(${windowWidth}px - 150px - 250px - 120px)`} : windowWidth > 600 ? {width:`calc(${windowWidth}px - 250px - 120px)`} : {width:`calc(${windowWidth}px - 50px)`} }>Search</div>
            <div ref={basketWidth} className={`float-start bg-warning ${styles.basketBox}`} style={{width:"250px"}}>Basket</div>

        </div>
    );
};

export default BigMenu;
