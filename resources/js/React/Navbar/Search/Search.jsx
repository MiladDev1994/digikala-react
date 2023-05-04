import React, {useContext, useEffect, useRef, useState} from 'react';
import {UserContext} from "../../Context/UseContextProvider";
import {Link} from "react-router-dom";
import styles from './Search.module.css';
import digiLogo from '../../../../../public/image/logo.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import personLogo from '../../../../../public/image/df110dcf.svg'
import axios from "axios";
import {useSelector} from "react-redux";
import useSumQuantity from "../../Hooks/useSumQuantity";
import {PermissionBasketContext} from "../../Product/Context/PermissionBasketContextProvider";


const Search = () => {

    const basketStart = useSelector(item => item.basketStart.data)
    const basket = useSelector(item => item.basket)
    const {user , setUser} = useContext(UserContext);
    const logoWidth = useRef();
    const basketWidth = useRef();
    const selectionWidth = useRef();
    const [searchView , setSearchView] = useState(false);
    const [searchValue , setSearchValue] = useState('')
    const [fetchBasket , setFetchBasket] = useState([]);
    const {permission, setPermission} = useContext(PermissionBasketContext)

    useEffect(() => {
        const fetch = async () => {
            setFetchBasket(await basket)
        }
        fetch();
    } , [basket])

    const logOutHandler = () => {
        axios.post('/api/logOut' , {
            logOut: true
        })
            .then(response => {
                setUser(response.data)
            })
            .catch(error => console.log('no'))
    }
    // console.log(basket)
    return (
        <div className={`text-light px-4 d-flex align-items-center justify-content-center bg-dark ${styles.searchBox}`} dir={'rtl'}>
            <div ref={selectionWidth} className={`${styles.selection} d-flex align-items-center justify-content-between`}>
                {
                    searchView ? <div
                            className={`${styles.searchFake} bg-dark opacity-50 position-absolute`}
                            onClick={() => setSearchView(prevSearch => !prevSearch)}
                        > </div>
                        : null
                }

                <div className={`h-100 d-flex align-items-center justify-content-start ${styles.searchResponsive}`}>
                    <Link to={'/'} ref={logoWidth} className={`${styles.logoBox}`}>
                        <img src={digiLogo} alt={'logo'} />
                    </Link>





                    <div className={styles.searchDinamic}>
                        <div
                            className={`${styles.input} rounded-3 d-flex align-items-center justify-content-start p-2 shadow`}

                        >

                            {
                                searchView ?
                                    <div className={`${styles.searchData} bg-dark shadow rounded-3`}>
                                        <div className={"d-flex border-bottom border-secondary border-opacity-25"}>
                                            <i className={'bi-search ms-3 opacity-50 h5 mt-2 me-2'}/>
                                            <input
                                                type={'text'}
                                                className={'input-group-text bg-dark border-0 text-light text-start w-100'}
                                                placeholder={"جستوجو...."}
                                                style={{outline:"none"}}
                                                value={searchValue}
                                                onChange={event => setSearchValue(event.target.value)}
                                            />

                                        </div>
                                    </div> :
                                    null
                            }
                            {
                                searchView ?
                                    <i
                                        className={`${styles.closeBtn} bi-x-lg`} style={{zIndex:10}}
                                        onClick={() => setSearchView(prevSearch => !prevSearch)}
                                    /> :
                                    null
                            }
                            <i className={'bi-search me-3 opacity-50 h5 mt-2 ms-1'}/>
                            <div className={'opacity-50 w-100'} onClick={() => setSearchView(prevSearch => !prevSearch)}>
                                {
                                    !!searchValue  ?  searchValue:
                                        'جستوجو...'
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div ref={basketWidth} className={`align-items-center justify-content-around px-2 ${styles.basketBox}`}>

                {/*LogIn*/}
                    {user.length ?
                        <Dropdown>
                        <Dropdown.Toggle className={`${styles.dropdown} border-0`} variant="dark" id="dropdown-basic">
                        <i className={'bi-person h2 mt-1'} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={`${styles.dropdownMenu} bg-dark text-light shadow p-0`}>
                        <Link to={'/userPanel/order/sending'} className={'d-flex align-items-center justify-content-between px-3 py-2'}>
                        <img src={personLogo}/>
                        <h5>{user[0].name}</h5>
                        <i className={'bi-chevron-left'} />
                        </Link>
                        <Link to={'/userPanel/order/sending'} className={'d-flex align-items-center justify-content-start px-4'}>
                        <i className={'bi-bag h5 me-2'} />
                        <p className={'mt-1'}>سفارشات</p>
                        </Link>
                        <Link to={'/userPanel/favorite'} className={'d-flex align-items-center justify-content-start px-4'}>
                        <i className={'bi-heart  h5 me-2'} />
                        <p className={'mt-1'}>علاقه&zwnj;مندی</p>
                        </Link>
                        <a onClick={logOutHandler} className={'d-flex align-items-center justify-content-start px-4'} style={{border:0}}>
                        <i className={'bi-box-arrow-right h5 me-2'} />
                        <p className={'mt-1'}>خروج از حساب کاربری</p>
                        </a>
                        </Dropdown.Menu>
                        </Dropdown>
                        :
                        <div className={`${styles.login} h-100 rounded-3 px-2 d-flex align-items-center justify-content-between`} >
                        <i className={'bi-box-arrow-left h4 mt-1'} />
                        <Link to={'/login'} className={styles.loginText}>ورود</Link>
                        <div className={styles.line} />
                        <Link to={'/register'}>ثبت&zwnj; نام</Link>
                        </div>
                    }

                    <Link to={user.length ? '/basket' : '/login'} className={"bi-bag h4 mt-1 text-light position-relative"}>
                        {user.length ?
                            <>
                                {fetchBasket.active ?
                                useSumQuantity(fetchBasket.products).sumQuantity ? <div className={`bg-danger rounded-circle  ${styles.basketNumber}`}>{useSumQuantity(fetchBasket.products).sumQuantity}</div> : null:
                                useSumQuantity(basketStart).sumQuantity ? <div className={`bg-danger rounded-circle  ${styles.basketNumber}`}>{useSumQuantity(basketStart).sumQuantity}</div> : null
                                }
                            </>
                            : null
                        }


                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Search;
