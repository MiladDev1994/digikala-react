import React from 'react';
import styles from './BannerFour.module.css';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const BannerFour = () => {
    const data = useSelector(element => element.homeView.data);
    return (
        <div className={'w-100'}>
            <div className={styles.box}>
                <div className={'row w-100 px-3 m-auto'}>
                    {data.length ?
                        data.map((item , index) => index > 0 && index < 5 ?
                            <Link key={item.id} className={'col-6 col-lg-3 mt-4'}>
                                <img width={'100%'} src={`http://127.0.0.1:8000/images/${item.image}`} className={'rounded-4 shadow'}/>
                            </Link>
                            : null
                        ): null
                    }
                </div>
            </div>
        </div>
    );
};

export default BannerFour;
