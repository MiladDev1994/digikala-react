import React, {useEffect, useRef, useState} from 'react';
import styles from './SpecialProducts.module.css';
import Logo from '../../../../../public/images/box.png';
import Text from '../../../../../public/images/amazing-typo.svg'
import {Link} from "react-router-dom";

const SpecialProducts = ({product}) => {

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
            Number(dragBox.current.scrollLeft) === -2274 ? Left.current.style.display = 'none' : Left.current.style.display = 'flex';
            Number(dragBox.current.scrollLeft) === 0 ? Right.current.style.display = 'none' : Right.current.style.display = 'flex';
        }
    } , [])

    return (
        <div className={'w100'} dir={'rtl'}>
            <div className={`${styles.box} m-auto position-relative`}>
                <div
                    ref={dragBox}
                    className={`bg-danger shadow ${styles.main}`}
                    onMouseDown={clickHandler}
                    onMouseMove={moveHandler}
                    onMouseUp={upHandler}
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
                            {product.length ?
                                product[1].map((item , index) =>
                                    <Link to={`/${item.product[0].id}`}
                                        key={item.id}
                                        className={`${index === 0 ? 'rounded-start' : index === 19 ? 'rounded-end' : ''} p-2 h-100 position-absolute bg-danger ${styles.items}`}
                                        style={{right:`${index * 182}px`}}
                                    >
                                        <img width={'100%'} className={'rounded-3 border border-secondary border-3'} src={`http://127.0.0.1:8000/images/${item.product[0].image.split(',')[0]}`} />
                                    </Link>
                                )
                                :
                                null
                            }
                        </div>
                    </div>


                </div>
                    <i
                        ref={Right}
                        className={`${styles.rightBTN} bi-chevron-right align-items-center justify-content-center h5 bg-secondary text-dark shadow rounded-circle position-absolute opacity-75`}
                        onClick={rightHandler}
                    />
                    <i
                        ref={Left}
                        className={`${styles.leftBTN} bi-chevron-left align-items-center justify-content-center h5 bg-secondary text-dark shadow rounded-circle position-absolute opacity-75`}
                        onClick={leftHandler}
                    />

            </div>

        </div>
    );
};

export default SpecialProducts;
