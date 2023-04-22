import React from 'react';
import {useSelector} from "react-redux";
import styles from "../BannerFour/BannerFour.module.css";
import {Link} from "react-router-dom";

const BannerTow = () => {

    const data = useSelector(element => element.homeView.data);

    return (
        <div className={'w-100'}>
            <div className={styles.box}>
                <div className={'row w-100 px-3 m-auto'}>
                    {data.length ?
                        data[0].map((item , index) => index > 4 && index < 7 ?
                            <Link key={item.id} className={'col-6  mt-4'}>
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

export default BannerTow;
