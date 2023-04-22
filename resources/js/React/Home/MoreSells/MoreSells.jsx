import React , {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import styles from './MoreSells.module.css';
import Item from "./Item/Item";

const MoreSells = () => {
    const varieties = useSelector(item => item.homeView.data);
    const BoxLength = varieties.length && (Math.ceil(varieties[3].length/3) > 8 ? 8 :  Math.ceil(varieties[3].length/3))


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
            Box.current.scrollLeft + (BoxLength*300) - Box.current.clientWidth === 0 ? left.current.style.display = 'none' : left.current.style.display = 'flex';
        }
    } , [BoxLength])

    return (
        <div className={'w-100 mt-5'} dir={'rtl'}>
            <div className={`${styles.main} m-auto border border-light border-opacity-25 rounded-3 overflow-hidden shadow position-relative`} >
                <div className={'d-flex align-items-center justify-content-center py-3'}>
                    <i className={'bi-fire text-warning h5 me-2 mt-2'} />
                    <h4 className={'text-light'}>پرفروش‌ترین کالاها</h4>
                </div>

                <div
                    ref={Box}
                    className={`${styles.scrollBox} position-relative`}
                    onMouseDown={downHandler}
                    onMouseMove={moveHandler}
                    onMouseUp={upHandler}
                    onMouseLeave={upHandler}
                >
                    {varieties.length ?
                        varieties[3].map((item , index) => index < 24 && index % 3 === 0 ?
                            <div key={item.id} className={'position-absolute h-100 border-left'} style={{width: '300px', right: `${(index/3*300)}px`}}>
                                {
                                    varieties[3].map((element , num) => (num === index) || (num === (index + 1)) || (num === (index + 2)) ?
                                        <Item key={element.id} data={element} index={num} >{num}</Item>
                                    : null
                                    )

                                }
                            </div>
                            : null
                        )
                        :null
                    }
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

export default MoreSells;
