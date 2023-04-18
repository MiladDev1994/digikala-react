import React, {useEffect, useRef, useState} from 'react';
import styles from './SpecialProducts.module.css';
import Logo from '../../../../../public/images/box.png';
import Text from '../../../../../public/images/amazing-typo.svg'
import {Link} from "react-router-dom";
import Item from "./Item/Item";
import {useSelector , useDispatch} from "react-redux";
import {fetchVarietiesApi} from "../../Redux/Varieties/VarietiesAction";
// import {fetchHomeViewApi} from "../../Redux/HomeView/HmeViewAction";

const SpecialProducts = () => {

    const homeView = useSelector(item => item.homeView.data);
    const varieties = useSelector(item => item.varieties.data);
    const category = useSelector(item => item.category.data);
    const dispatch = useDispatch();

    const filterVarieties = varieties.filter((item) => item.special === 1);

    const specialVarieties = filterVarieties.sort(() => Math.random() - 0.5);

    const dragBox = useRef();
    const Right = useRef();
    const Left = useRef();

    let lets = false;
    let pageX;
    let scrollLeft;

    const clickHandler = (e) => {
        e.preventDefault()
        lets = true;
        pageX = e.pageX;
        scrollLeft = dragBox.current.scrollLeft;
    }
    const moveHandler = (e) => {
        if (lets){
            let location = e.pageX - pageX;
            dragBox.current.scrollLeft = scrollLeft - location;
        }
    }
    const upHandler = (e) => {
        lets = false;
    }

    const rightHandler = () => {
        dragBox.current.scrollLeft += 182;
    }
    const leftHandler = () => {
        dragBox.current.scrollLeft -= 182;
    }

    useEffect(() => {
        dispatch(fetchVarietiesApi());
        dragBox.current.onscroll = () => {
            let mainWidth = dragBox.current.scrollLeft;
            let scrollWidth = dragBox.current.clientWidth - dragBox.current.scrollWidth
            mainWidth === scrollWidth ? Left.current.style.display = 'none' : Left.current.style.display = 'flex';
            Number(mainWidth) === 0 ? Right.current.style.display = 'none' : Right.current.style.display = 'flex';
        }
        } , [])

    return (
        <div className={'w100'} dir={'rtl'}>
            <div className={`${styles.box} m-auto position-relative`}>
                <div
                    ref={dragBox}
                    className={`bg-danger shadow w-100 ${styles.main}`}
                    onMouseDown={clickHandler}
                    onMouseMove={moveHandler}
                    onMouseUp={upHandler}
                    onMouseLeave={upHandler}
                >
                    <div className={'d-flex align-items-center justify-content-start px-3'} style={{width:'3834px'}}>
                        <div className={`${styles.logo} d-flex align-items-center justify-content-center flex-column p-1`}>
                            <img src={Text}/>
                            <img src={Logo}/>
                            <Link to={1} className={'link-light'}>
                                <p>مشاهده همه</p>
                            </Link>
                        </div>
                        <div className={`position-relative ${styles.productBox}`}>
                            {specialVarieties.length ?
                                specialVarieties.map((item , index) => index < 20 ?
                                    <Item key={item.id} item={item} index={index}/> : null
                                )
                                :null
                            }
                        </div>
                    </div>
                </div>
                    <i
                        ref={Right}
                        className={`${styles.BTN} ${styles.right} bi-chevron-right align-items-center justify-content-center h5 bg-light text-dark shadow rounded-circle position-absolute`}
                        onClick={rightHandler}
                    />
                    <i
                        ref={Left}
                        className={`${styles.BTN} ${styles.left} bi-chevron-left align-items-center justify-content-center h5 bg-light text-dark shadow rounded-circle position-absolute`}
                        onClick={leftHandler}
                    />

            </div>

        </div>
    );
};

export default SpecialProducts;
