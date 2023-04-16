import React from 'react';
import styles from './Home.module.css';
import CarouselB from "./Carousel/Carousel";
import Servises from "./Servises/Servises";
import SpecialProducts from "./SpecialProducts/SpecialProducts";
import store from "./Redux/store";
import {Provider} from 'react-redux';


const Home = () => {

    return (
        <Provider store={store}>
            <div style={{height:"2000px"}}>
                <div className={styles.headerFake}>1</div>
                <CarouselB />
                <Servises />
                <SpecialProducts />
            </div>
        </Provider>

    );
};

export default Home;
