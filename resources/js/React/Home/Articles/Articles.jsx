import React, {useEffect} from 'react';
import styles from "./Articles.module.css";
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {fetchArticleApi} from "../../Redux/Articles/ArticlesAction";

const Articles = () => {
    const data = useSelector(element => element.articles.data);
    const dispatch = useDispatch();
    console.log(data)

    useEffect(() => {
        dispatch(fetchArticleApi());
    }  ,[])
    return (
        <div className={'w-100'} dir={'rtl'}>
            <div className={styles.box}>
                <div className={'row w-100 px-3 m-auto'}>
                    {data.length ?
                        data.map((item , index) => item.special === 1 ?
                            <Link key={item.id} className={'col-12 col-md-6 col-lg-3 mt-4'}>
                                <div className={'border shadow rounded-3 border-secondary border-opacity-50 overflow-hidden'}>
                                    <img width={'100%'} src={`http://127.0.0.1:8000/images/${item.logo}`} className={'rounded-top'}/>
                                    <div className={`${styles.subject} text-start text-light opacity-50 px-2`}>{item.subject}</div>
                                </div>

                            </Link>
                            : null
                        ): null
                    }
                </div>
            </div>
        </div>
    );
};

export default Articles;
