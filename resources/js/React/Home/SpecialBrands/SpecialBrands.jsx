import React, {useEffect, useRef} from 'react';
import styles from './SpecialBrands.module.css';
import {useSelector , useDispatch} from "react-redux";
import {fetchBrandsApi} from "../../Redux/Brands/BrandsAction";
import Item from "./Item/Item";


const SpecialBrands = () => {
    const brands = useSelector(item => item.brand.data);
    const dispatch = useDispatch();
    const data = brands.filter(item => item.special === 1);
    const dataLength = data.length * 200;

    const Box = useRef();
    const right = useRef();
    const left = useRef();

    let start = false
    let pageX;
    let scrollLeft;
    const downHandler = (e) => {
        e.preventDefault();
        start = true;
        pageX = e.pageX;
        scrollLeft = Box.current.scrollLeft;
    }
    const moveHandler = (e) => {
        if (!start) return;
        let Location = e.pageX - pageX;
        Box.current.scrollLeft = scrollLeft - Location;
    }
    const upHandler = () => {
        start = false;
    }

    const btnHandler = (action) => {
        action.type ?
            Box.current.scrollLeft += 200 :
            Box.current.scrollLeft -= 200
    }

    useEffect(() => {
        dispatch(fetchBrandsApi());
        Box.current.onscroll =() => {
            Box.current.scrollLeft === 0 ? right.current.style.display = 'none' : right.current.style.display = 'flex';
            Box.current.scrollLeft + (dataLength) - Box.current.clientWidth === 0 ? left.current.style.display = 'none' : left.current.style.display = 'flex';
        }
    } , [dataLength])
    return (
        <div className={'w-100 py-3 mt-2 position-relative'} dir={'rtl'}>
            <div className={`${styles.topLevel} border border-opacity-25 border-light rounded-3 shadow`}>
                <div className={'d-flex align-items-center justify-content-center'}>
                    <i className={'bi-star-fill text-warning h5 m-2'} />
                    <h4 className={'text-center py-4 text-light'}>پیشنهاد دیجی کالا</h4>
                </div>

                <div className={`position-relative ${styles.main}`}>
                    <div
                        ref={Box}
                        className={`${styles.box} rounded-3`}
                        onMouseDown={downHandler}
                        onMouseMove={moveHandler}
                        onMouseUp={upHandler}
                        onMouseLeave={upHandler}
                    >
                        <div className={'position-relative overflow-hidden rounded-3  h-100'} style={{width:`${data.length*200}px`}}>
                            {data.length ?
                                data.map((element , index) => element.special === 1 ?
                                    <Item key={element.id} data={element} index={index} />
                                    :null
                                ):null
                            }
                        </div>
                    </div>

                    <i
                        ref={right}
                        className={`${styles.btn} ${styles.right} bi-chevron-right position-absolute text-light rounded-circle bg-dark shadow`}
                        onClick={() => btnHandler({type: true})}
                    />
                    <i
                        ref={left}
                        className={`${styles.btn} ${styles.left} bi-chevron-left position-absolute text-light rounded-circle bg-dark shadow`}
                        onClick={() => btnHandler({type: false})}
                    />
                </div>
            </div>


        </div>
    );
};

export default SpecialBrands;
