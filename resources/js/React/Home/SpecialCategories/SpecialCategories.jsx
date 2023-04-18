import React, {useEffect, useRef} from 'react';
import styles from './SpecialCategories.module.css';
import {useSelector} from "react-redux";
import Item from "./Item/Item";


const SpecialCategories = () => {
    const categories = useSelector(item => item.category.data);
    const data = categories.filter(item => item.special === 1);
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
        Box.current.onscroll =() => {
            Box.current.scrollLeft === 0 ? right.current.style.display = 'none' : right.current.style.display = 'flex';
            Box.current.scrollLeft + (data.length*200) - Box.current.clientWidth === 0 ? left.current.style.display = 'none' : left.current.style.display = 'flex';
        }
    })
    return (
        <div className={'w-100 py-3 position-relative'} dir={'rtl'}>
            <h4 className={'text-center py-4 text-light'}>پیشنهاد دیجی کالا</h4>
            <div className={`position-relative shadow ${styles.main}`}>
                <div
                    ref={Box}
                    className={`${styles.box} border border-opacity-25 border-light rounded-3`}
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
    );
};

export default SpecialCategories;
