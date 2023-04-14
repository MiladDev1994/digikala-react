import React, {useState} from 'react';
import styles from './BigMenu.module.css'
import {Link} from "react-router-dom";
import Menu from "./Menu/Menu";

const BigMenu = ({scroll , category}) => {

    const [snake , setSnake] = useState({
        location: '0px',
        width: '0px',
    });
    const [menu , setMenu] = useState(false);

    const menuHandler = (status) => {
        if (status.show){
            setSnake({location: "13px" , width: "97px"});
            setMenu(true);
        }else {
            setSnake({location: "13px" , width: "0px"});
            setMenu(false);
        }




    }
    return (
        <div className={`${scroll ? styles.BoxHidden : styles.BoxShow} bg-dark text-light shadow`} dir={'rtl'}>
            <div className={`${styles.selection} d-flex align-items-center justify-content-between px-4`}>
                <div className={"position-relative"}>

                    <div className={`${styles.ul}`}>

                        <li
                            className={'d-flex align-items-center justify-content-center position-relative'}
                            onMouseOver={() => menuHandler({show:true})}
                            onMouseLeave={() => menuHandler({show:false})}
                            style={{cursor:"pointer"}}
                        >
                            {
                                menu ? <Menu category={category}/> : null
                            }

                            <i className={'bi-list h5 mt-2'} />
                            <div className={`${styles.menuFont}`}>دسته&zwnj;بندی&zwnj;کالاها</div>
                        </li>

                        <li
                            onMouseOver={() => setSnake({location: "135px" , width: "78px"})}
                            onMouseLeave={() => setSnake({location: "135px" , width: "0px"})}
                        >
                            <Link className={'d-flex align-items-center justify-content-center'} to={'/#'}>
                                <i className={'bi-list h5 mt-2'} />
                                <div>سوپرمارکت</div>
                            </Link>
                        </li>

                        <li
                            onMouseOver={() => setSnake({location: "237px" , width: "87px"})}
                            onMouseLeave={() => setSnake({location: "237px" , width: "0px"})}
                        >
                            <Link className={'d-flex align-items-center justify-content-center'} to={'/#'}>
                                <i className={'bi-list h5 mt-2'} />
                                <div>پرفروش&zwnj;ترین&zwnj;ها</div>
                            </Link>
                        </li>

                        <li
                            onMouseOver={() => setSnake({location: "355px" , width: "125px"})}
                            onMouseLeave={() => setSnake({location: "355px" , width: "0px"})}
                        >
                            <Link className={'d-flex align-items-center justify-content-center'} to={'/#'}>
                                <i className={'bi-list h5 mt-2'} />
                                <div>تخفیف&zwnj;ها و پیشنهاد&zwnj;ها</div>
                            </Link>
                        </li>

                        <li
                            onMouseOver={() => setSnake({location: "508px" , width: "85px"})}
                            onMouseLeave={() => setSnake({location: "508px" , width: "0px"})}
                            // className={'border-start'}
                        >
                            <Link className={'d-flex align-items-center justify-content-center'} to={'/#'}>
                                <i className={'bi-list h5 mt-2'} />
                                <div>شگفت&zwnj;انگیز&zwnj;ها</div>
                            </Link>
                        </li>

                        <li>
                            <Link className={'d-flex align-items-center justify-content-center h-100'} to={'/#'}>
                                <div>در دیجیکالا بفروشید!</div>
                            </Link>
                        </li>

                    </div>
                    <div className={styles.snakeBox}>
                        <div className={styles.snake} style={{marginRight:snake.location , width:snake.width}}> </div>
                    </div>
                </div>

                <div className={'float-start d-flex align-items-center justify-content-center'}>
                    <i className={'bi-geo-alt me-1 opacity-75 ms-1'} />
                    <div className={styles.location}>شهر خود را انتخاب کنید</div>
                </div>
            </div>


            {
                menu ?
                    <div className={`${styles.menuFake} bg-dark opacity-50`}> </div> :
                    null
            }
        </div>
    );
};

export default BigMenu;
