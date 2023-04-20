import React from 'react';
import styles from './SpecialCategoryVarieties.module.css';
import {useSelector} from "react-redux";
import svg from '../../../../../public/images/home/other/fresh.png'
import {Link} from "react-router-dom";


const SpecialCategoryVarieties = () => {

    const homeView = useSelector(item => item.homeView.data);
    const varieties = useSelector(item => item.varieties.data);
    const categories = useSelector(item => item.category.data);

    const newVarieties = varieties.filter(item =>
        homeView.length && item.special === 1 &&
        (item.categories.filter(element => (element.id === homeView[0].category_id)).length > 0  ?
            (item.categories.filter(element => element.id === homeView[0].category_id))[0].id :
            0) === homeView[0].category_id

    )

    const lastData = newVarieties.sort(() => Math.random() - 0.5)


    return (
        <div className={'w-100 mt-4'} dir={'rtl'}>
            <div className={`${styles.box} m-auto px-3`} >
                <div
                    className={`${styles.main} d-flex align-items-center justify-content-center rounded-3 shadow overflow-hidden px-3`}
                    style={{backgroundColor: homeView.length ? homeView[0].image : 'transparent'}}
                >
                    <div className={`d-flex ${styles.firstChild}`}>
                        <div className={'w-50 h-100 d-flex align-items-center justify-content-center'}>
                            <img src={svg}/>
                        </div>
                        <div className={'w-50'}>
                            <h5 className={'text-center mt-1'} >شگفت انگیز</h5>
                            <h5 className={'text-center px-2'}>
                                {homeView.length && categories.length ? categories.filter(item => item.id === homeView[0].category_id)[0].name : ''}
                            </h5>
                        </div>
                    </div>

                    <div className={`d-flex ${styles.lastChild}`}>
                        <div className={`${styles.varieties} position-relative`}>
                            {
                                lastData.length ?
                                    lastData.map((item , index) =>
                                        <div
                                            key={item.id}
                                            className={'position-absolute d-flex align-items-center justify-content-center rounded-pill mt-2 ms-2'}
                                            style={{right: `${index*85}px`, width: '75px', height: '75px'}}
                                        >
                                            <div className={'w-100 h-100 position-relative d-flex align-items-center justify-content-center bg-light rounded-pill'}>
                                                <img width={'70%'} src={`http://127.0.0.1:8000/images/${item.product[0].image.split(',')[0]}`} />
                                                <div className={`position-absolute text-light bg-danger rounded-pill px-1 ${styles.feeOff}`}>
                                                    {`${Math.round((1 - (item.price_off / item.price)) * 100)}%`}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    : null
                            }
                        </div>
                        <div className={`${styles.btn} position-relative d-flex align-items-center justify-content-center`}>
                            <Link className={'position-absolute bg-danger p-2 d-flex text-light rounded-pill'}>
                                <div>{`بیش از ${lastData.length-5} تنوع`}</div>
                                <i className={'bi-arrow-left ms-2'} />
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SpecialCategoryVarieties;