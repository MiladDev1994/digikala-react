import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './Favorite.module.css';
import axios from "axios";
import Item from "./Item/Item";
import {BeatLoader} from "react-spinners";

const Favorite = () => {

    const [similarProduct , setSimilarProduct] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/favorite/index`)
            .then(response => setSimilarProduct(response.data))
    } , [])


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
        dragBox.current.onscroll = () => {
            let mainWidth = dragBox.current.scrollLeft;
            let scrollWidth = dragBox.current.clientWidth - dragBox.current.scrollWidth
            mainWidth === scrollWidth ? Left.current.style.display = 'none' : Left.current.style.display = 'flex';
            Number(mainWidth) === 0 ? Right.current.style.display = 'none' : Right.current.style.display = 'flex';
        }
    } , [])

    return (
        <div className={'w-100 py-2 '} dir={'rtl'}>
            {/*<h5 className={'px-3 text-light opacity-50 py-1'}>محصولات مشابه</h5>*/}
            <div className={`${styles.box} m-auto position-relative`}>
                <div
                    ref={dragBox}
                    className={` w-100  ${styles.main} rounded-3`}
                    onMouseDown={clickHandler}
                    onMouseMove={moveHandler}
                    onMouseUp={upHandler}
                    onMouseLeave={upHandler}
                >
                    <div className={'d-flex align-items-center justify-content-start'} >
                        <div className={`position-relative ${styles.productBox} `}>
                            {similarProduct.length ?
                                similarProduct.map((item , index) => index < 20 ?
                                    <Item key={item.id} item={item} index={index}/> : null
                                )
                                :
                                <div className={'w-100 h-100 d-flex align-items-center justify-content-center'}>
                                    <BeatLoader
                                        color="white"
                                        cssOverride={{}}
                                        loading
                                        speedMultiplier={1}
                                        size={25}
                                        margin={10}
                                        className={'opacity-50'}
                                    />
                                </div>
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

export default Favorite;
