import React, { useRef, useState} from 'react';
import {Link} from "react-router-dom";
import styles from './Search.module.css';
import digiLogo from '../../../../../public/image/logo.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import personLogo from '../../../../../public/image/df110dcf.svg'

const Search = () => {
    const logoWidth = useRef();
    const basketWidth = useRef();
    const selectionWidth = useRef();
    const [windowWidth , setWindowWidth] = useState(window.screen.width);

    const windowHandler = () => {
        setWindowWidth(window.screen.width)
    }
    window.addEventListener('resize' , windowHandler);

    return (
        <div className={`text-light px-4 d-flex align-items-center justify-content-center bg-dark ${styles.searchBox}`} dir={'rtl'}>
            <div ref={selectionWidth} className={`${styles.selection} d-flex align-items-center justify-content-between`}>

                <div className={'h-100 d-flex align-items-center justify-content-between'}>
                    <div ref={logoWidth} className={`ms-5 ${styles.logoBox}`}>
                        <img src={digiLogo} alt={'logo'} />
                    </div>
                    <div style={
                        windowWidth > 1600 ? {width:`calc(1600px - 150px - 250px - 120px)`} :
                            windowWidth > 1024 ? {width:`calc(${windowWidth}px - 150px - 250px - 120px)`} :
                                windowWidth > 600 ? {width:`calc(${windowWidth}px - 250px - 120px)`} :
                                    {width:`calc(${windowWidth}px - 50px)`} }
                    >
                        <div className={`${styles.input} rounded-3 d-flex align-items-center justify-content-start p-2 shadow`}>
                            <i className={'bi-search ms-3 opacity-50 h5 mt-2 me-1'}/>
                            <div className={'opacity-50'}>جستوجو...</div>
                        </div>
                    </div>
                </div>



                <div ref={basketWidth} className={`align-items-center justify-content-around px-2 ${styles.basketBox}`}>

                {/*LogOut*/}
                    {/*<div className={`${styles.login} h-100 rounded-3 px-2 d-flex align-items-center justify-content-between`} >*/}
                    {/*    <i className={'bi-box-arrow-left h4 mt-1'} />*/}
                    {/*    <Link to={'#'} className={styles.loginText}>ورود</Link>*/}
                    {/*    <div className={styles.line} />*/}
                    {/*    <Link to={'#'} className={' '}>ثبت&zwnj; نام</Link>*/}
                    {/*</div>*/}


                {/*LogIn*/}
                    <Dropdown>
                        <Dropdown.Toggle className={`${styles.dropdown} border-0`} variant="dark" id="dropdown-basic">
                            <i className={'bi-person h2 mt-1'} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={`${styles.dropdownMenu} bg-dark text-light shadow p-0`}>
                            <Link to={'#'} className={'d-flex align-items-center justify-content-between px-3 py-2'}>
                                <img src={personLogo}/>
                                <h5>میلاد</h5>
                                <i className={'bi-chevron-left'} />
                            </Link>
                            <Link to={'#'} className={'d-flex align-items-center justify-content-start px-4'}>
                                <i className={'bi-bag h5 ms-2'} />
                                <p className={'mt-1'}>سفارشات</p>
                            </Link>
                            <Link to={'#'} className={'d-flex align-items-center justify-content-start px-4'}>
                                <i className={'bi-heart  h5 ms-2'} />
                                <p className={'mt-1'}>علاقه&zwnj;مندی</p>
                            </Link>
                            <Link to={'#'} className={'d-flex align-items-center justify-content-start px-4'} style={{border:0}}>
                                <i className={'bi-box-arrow-right h5 ms-2'} />
                                <p className={'mt-1'}>خروج از حساب کاربری</p>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>



                    <i className={"bi-bag h4 mt-1"} />

                </div>

            </div>
        </div>
    );
};

export default Search;
