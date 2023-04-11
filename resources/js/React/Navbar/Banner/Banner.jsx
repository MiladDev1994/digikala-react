import React, {useEffect, useRef, useState} from 'react';
import styles from './Banner.module.css';
import axios from "axios";

const Banner = () => {
    const [banner , setBanner] = useState();
    // const [screen , setScreen] = useState(window.innerWidth)
    // const bannerBox = useRef();
    //
    //
    //
    // const handler = () => {
    //     setScreen(window.innerWidth)
    //     const bannerDimensions = bannerBox.current.scrollWidth / bannerBox.current.scrollHeight;
    // }
    // window.addEventListener('resize' , handler)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/homeView')
            .then(response => setBanner(response.data))

    } , [])

    const baseUrl = 'http://127.0.0.1:8000';

    return (
        <div className={styles.bannerBoxMax}>

            {
                // banner ? <img className={styles.bannerImg} src={`${baseUrl}/images/${banner[8].image}`}  alt={'banner'}/> : null
                banner ? <div className={styles.bannerBoxMax} style={{
                    backgroundImage:`url(${baseUrl}/images/${banner[8].image})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"
                }}></div> : null
            }

        </div>
    );
};

export default Banner;
