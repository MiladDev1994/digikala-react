import React from 'react';
import styles from './Banner.module.css';
import {useSelector} from "react-redux";

const Banner = () => {

    const banner = useSelector(item => item.homeView.data)

    const baseUrl = 'http://127.0.0.1:8000';

    return (
        <div className={styles.bannerBoxMax}>
            {
                banner.length ? <div className={styles.bannerBoxMax} style={{
                    backgroundImage:`url(${baseUrl}/images/${banner[0][8].image})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"
                }}> </div> : null
            }

        </div>
    );
};

export default Banner;
