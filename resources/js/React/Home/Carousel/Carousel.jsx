import React, {useEffect, useState} from 'react';
import styles from './Carousel.module.css';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import {useSelector , useDispatch} from "react-redux";
import {fetchCarouselApi} from "../../Redux/Carousel/CarouselAction";


const CarouselB = () => {

    const carousel = useSelector(item => item.carouselData.data);
    const dispatch = useDispatch();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        dispatch(fetchCarouselApi());
    } , [])

    return (
        <div className={`${styles.carouselBox} m-auto`} dir={'rtl'}>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                {carousel.length ?
                    carousel.map(item =>
                        <Carousel.Item key={item.id} className={`position-relative`} >
                            <Link to={`/${item.id}`}>
                                <div
                                    className={`m-auto ${styles.imageBox}`}
                                    style={{backgroundImage: `url(http://127.0.0.1:8000/images/${item.image})`}}
                                >
                                </div>
                            </Link>


                        </Carousel.Item>
                    ) :
                    <div className={`d-flex align-items-center justify-content-center ${styles.spinner}`} > <Spinner animation="border" variant="secondary" style={{width: '100px', height: '100px'}} /></div>
                }
            </Carousel>
        </div>
    );
};

export default CarouselB;
