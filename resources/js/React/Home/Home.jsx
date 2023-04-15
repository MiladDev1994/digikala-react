import React, {useState , useEffect} from 'react';
import styles from './Home.module.css';
import CarouselB from "./Carousel/Carousel";
import Servises from "./Servises/Servises";
import SpecialProducts from "./SpecialProducts/SpecialProducts";
import axios from "axios";



const Home = () => {

    const [homeData , setHomeData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/carousel')
            .then(response => setHomeData(response.data))
    } , [])

    return (
        <div style={{height:"2000px"}}>
            <div className={styles.headerFake}>1</div>
            <CarouselB carousel={homeData}/>
            <Servises />
            <SpecialProducts product={homeData}/>
        </div>
    );
};

export default Home;
