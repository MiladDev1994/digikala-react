import React, {useEffect} from 'react';
import styles from './Article.module.css';
import {Link, useParams} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {fetchArticleApi} from "../Redux/Articles/ArticlesAction";
import TomanLight from '../../../../public/images/tomanLight.svg';

const Article = () => {

    const params = useParams();
    const data = useSelector(item => item.articles.data)
    const dispatch = useDispatch();
    const filterData = data.filter(item => item.id === Number(params.id))

    useEffect(() => {
        !data.length && dispatch(fetchArticleApi())
    } , [data])

    return (
        <div className={'w-100'} dir={"rtl"}>
            <div className={`${styles.box}  d-flex`}>

                <div className={`${styles.detail} px-0 py-4 px-lg-5 `}>
                    {filterData.length ?
                        <div className={'w-100 px-4 d-flex align-items-center justify-content-start flex-column'}>
                            <img width={'80%'} src={`http://127.0.0.1:8000/images/${filterData[0].file }`} className={'rounded-4 shadow'}/>
                            <h3 className={'mt-5 text-start text-light opacity-75 w-100'}>مقدمه :</h3>
                            <p className={'w-100 text-light pt-3 pb-4 opacity-75 border-bottom border-secondary border-opacity-50'}>{filterData[0].Introduction}</p>
                            <div className={`text-light border border-secondary p-2 rounded-4 w-100 shadow mt-3 ${styles.productBox}`}>
                                <img height={'150px'} className={'rounded-3'} src={`http://127.0.0.1:8000/images/${filterData[0].product.image.split(',')[0]}`}/>
                                <div className={`${styles.productDetail} py-1 ps-2 ps-md-4`}>
                                    <div className={`${styles.name} opacity-75`}>{filterData[0].product.name}</div>
                                    <div className={`${styles.price}`}>
                                        <div className={`d-flex align-items-center justify-content-center h-50`}>
                                            {/*<div className={`w-25 h-100 d-flex align-items-center justify-content-center`}></div>*/}
                                            <div className={`w-100 h-100 d-flex align-items-center justify-content-center`}>
                                                <h5>{(filterData[0].variety[0].price_off / 10).toLocaleString()}</h5>
                                                <img src={TomanLight}/>
                                            </div>
                                        </div>
                                        <div className={`h-50 d-flex align-items-center justify-content-center`}>
                                            <div className={'w-25 h-100 d-flex align-items-center justify-content-center'}>
                                                <div className={'bg-danger px-2 rounded-pill'}>
                                                    {`${Math.round((1 - (filterData[0].variety[0].price_off / filterData[0].variety[0].price)) * 100)}%`}
                                                </div>
                                            </div>
                                            <div className={`${styles.proceOff} w-75 h-100 d-flex align-items-center justify-content-center opacity-50`}>
                                                {(filterData[0].variety[0].price / 10).toLocaleString()}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className={'w-100 text-light pt-3 pb-4 opacity-75 mt-3'}>{filterData[0].about1}</p>
                            <p className={'w-100 text-light pt-3 pb-4 opacity-75'}>{filterData[0].about2}</p>
                            <p className={'w-100 text-light pt-3 pb-4 opacity-75'}>{filterData[0].about3}</p>
                            <p className={'w-100 text-light pt-3 pb-4 opacity-75'}>{filterData[0].about4}</p>
                        </div>
                        : null
                    }
                </div>

                <div className={`${styles.menu} p-3`}>
                    <div className={`${styles.menuMain} rounded-4 shadow`}>
                        <div className={`${styles.menuBox}`}>

                            {filterData.length ?
                                <div className={`w-100 border-bottom border-secondary border-opacity-25 p-3`}>
                                    <img width={'100%'} src={`http://127.0.0.1:8000/images/${filterData[0].product.image.split(',')[0]}`} className={' rounded-3'}/>
                                    <p className={`${styles.p} text-light mt-2`}>{filterData[0].product.name}</p>


                                    <div className={`${styles.detailPrice} mt-4 text-light`}>
                                        <div className={`d-flex align-items-center justify-content-between`}>
                                            {filterData[0].variety[0].price !== filterData[0].variety[0].price_off ?
                                                <div className={`${styles.priceOff} bg-danger text-light px-2 rounded-pill`}>{`${Math.round((1 - (filterData[0].variety[0].price_off / filterData[0].variety[0].price)) * 100)}%`}</div>
                                                : <div className={`${styles.priceOff}`} />
                                            }
                                            <div className={`d-flex`}>
                                                <div style={{fontWeight: '600'}}>{(filterData[0].variety[0].price_off / 10).toLocaleString()}</div>
                                                <img width={'25px'} src={TomanLight}/>
                                            </div>
                                        </div>
                                        {
                                            filterData[0].variety[0].price !== filterData[0].variety[0].price_off ?
                                                <div className={`${styles.priceB} text-center mt-2`}>{filterData[0].variety[0].price}</div>
                                                : null
                                        }
                                    </div>

                                </div>
                                : null
                            }

                            <h4 className={'text-center text-light opacity-50 mt-2'}>مقالات</h4>

                            {data.length ?
                                data.map(item =>
                                    <Link to={`/article/${item.id}`} key={item.id} className={`d-flex align-items-center justify-content-center flex-column p-2 ${styles.link}`}>
                                        <img width={'100px'} className={'rounded-pill shadow'} src={`http://127.0.0.1:8000/images/${item.logo}`}/>
                                        <p className={`${styles.text} text-light py-3 border-bottom border-secondary border-opacity-25 text-center w-100`}>{item.subject}</p>
                                    </Link>

                                )
                                : null
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Article;
