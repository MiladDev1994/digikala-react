import React, {useEffect, useRef, useState} from 'react';
import styles from './Product.module.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import Spinner from "react-bootstrap/Spinner";

const Product = () => {

    const [product , setProduct] = useState([]);
    const [favorite , setFavorite] = useState([]);

    const params = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${params.id}`)
            .then(response => {
                setProduct(response.data[0])
                setFavorite(response.data[1])
            })
    } , [])


    const [types , setTypes] = useState([]);
    useEffect(() => {
        product.map(item => !types.includes(item.type.color) && setTypes([item.type.color , ...types]))
    })


    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const [width , setWidth] = useState(`${document.documentElement.scrollWidth}px`);
    const sizeHandler = () => {
        setWidth(`${document.documentElement.scrollWidth}px`)
    }
    useEffect(() => {
        window.addEventListener('resize' , sizeHandler)
    })


    const [show , setShow] = useState(0);
    useEffect(() => {
        product.length &&
        setShow(product[0].type.color)
    } , [product])
    const showHandler = (type) => {
        setShow(type)
    }


    let priceTop = [];
    let priceDown = [];
    // const [priceTop , setPriceTop] = useState([])
    // const [priceDown , setPriceDown] = useState([])
    // priceTop.push(1)
    // useEffect(() => {
        // product.map(item =>
        //     // console.log(!priceTop.findIndex(element => element.type.color === item.type.color))
        //     // console.log(item)
        //     !priceTop.findIndex(element => element.type.color === item.type.color) ? setPriceTop([item , ...priceTop]) : setPriceDown([item , ...priceDown])
        // )

        for (let i=0; i<product.length ; i++){
            // console.log(!priceTop.findIndex(element => element.type.color === product[i].type.color))
            // console.log(product[i])
            // !priceTop.findIndex(element => element.type.color === product[i].type.color) ? priceTop.push(product[i]) : priceDown.push(product[i])
            // if (priceTop.length){
                if (!!priceTop.find(element => element.type.color === product[i].type.color)){
                    priceTop.push(product[i])
                }else {
                    priceDown.push(product[i])
                }
            // }else {
            //     priceTop.push(product[i])
            // }

            // console.log(!!priceTop.find(item => item.id === 1))
        }
    // } ,[product])

// console.log(product)

    return (
        <div className={'w-100'} dir={'rtl'}>
            <div className={styles.box}>
                {product.length ?
                    <div className={`w-100 d-flex mt-3 ${styles.header}`}>
                        {/*image*/}
                        <div className={`${styles.imageBox} d-flex align-items-center justify-content-center flex-column`}>
                            <div className={`${styles.favorite}`}>
                                {favorite.length ?
                                    <i className={'bi-heart-fill h3 px-4 text-danger'} /> :
                                    <i className={'bi-heart h3 px-4 text-light'} />
                                }
                            </div>

                            {/*bigImage*/}
                            <div className={` align-items-center justify-content-center flex-column w-100 ${styles.imageBig}`}>
                                <img width={'90%'} className={'mt-2 rounded-3 shadow'} src={`http://127.0.0.1:8000/images/${product[0].product[0].image.split(',')[0]}`} />
                                <div className={`mt-2 d-flex w-100 px-2`} style={{height: '80px'}}>
                                    {product.length ?
                                        product[0].product[0].image.split(',').length > 7 ?
                                            product[0].product[0].image.split(',').map((item , index) =>
                                                index > 0 && index < 6 &&
                                                <div
                                                    key={index}
                                                    className={`bg-danger m-1 opacity-75 border-secondary border rounded-2 shadow m-auto ${styles.imageList}`}
                                                    style={{backgroundImage: `url(http://127.0.0.1:8000/images/${product[0].product[0].image.split(',')[index]})`}}
                                                />
                                            ) :
                                            product[0].product[0].image.split(',').map((item , index) =>
                                                index > 0 && index < product[0].product[0].image.split(',').length-1 &&
                                                <div
                                                    key={index}
                                                    className={`bg-danger m-1 opacity-75 border-secondary border rounded-2 shadow m-auto ${styles.imageList}`}
                                                    style={{backgroundImage: `url(http://127.0.0.1:8000/images/${product[0].product[0].image.split(',')[index]})`}}
                                                />
                                            )
                                        :null
                                    }
                                </div>
                            </div>

                            {/*smallImage*/}
                            <div className={`w-100 ${styles.carouselBox}`}>
                                <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" className={'w-100'}>
                                    {product.length ?
                                        product[0].product[0].image.split(',').map((item , index) =>
                                            index < product[0].product[0].image.split(',').length - 1 &&
                                            <Carousel.Item key={index} className={`position-relative`} >
                                                <div style={{width: '100%', height: width}} className={'d-flex align-items-center justify-content-center'}>
                                                    <img className={'d-block  rounded-3 shadow'} width={'95%'} src={`http://127.0.0.1:8000/images/${item}`}/>
                                                </div>
                                            </Carousel.Item>
                                        ) : null
                                    }
                                </Carousel>
                            </div>



                        </div>


                        {/*name*/}
                        <div className={`${styles.typeBox} px-3 text-light`}>
                            {product.length ?
                                <>
                                    <Link to={`/shop/brand-${product[0].brand_id}`} className={'link-info'}>{product[0].brand.name}</Link>
                                    <h5 className={'mt-2 text-light opacity-75'}>{product[0].product[0].name}</h5>
                                    <div className={'w-100  mt-5'}>
                                        {types.length && product.length ?
                                            types.map(item =>
                                                product[0].product[0].variety_type === 'color' ?
                                                    <div key={item} onClick={() => showHandler(item)} className={`${item === show ? `border-info` : `border-light`} d-inline-block m-2 rounded-circle border  border-2 shadow`} style={{width: '40px', height: '40px', backgroundColor: item, transition: '0.3s', cursor: 'pointer'}} />
                                                :product[0].product[0].variety_type === 'null' ? null
                                                    :<div key={item} onClick={() => showHandler(item)} className={`${item === show ? `border-info` : `border-secondary border-opacity-50`} d-inline-block m-2 rounded-2 border shadow`} style={{height: '40px', fontSize: '13px', transition: '0.3s', cursor: 'pointer'}}>
                                                        <div className={'w-100 h-100 d-flex text-light align-items-center justify-content-center px-2'}> {item} </div>
                                                    </div>
                                            )
                                            :null
                                        }
                                    </div>
                                    <div className={'mt-5 px-4 py-1 d-flex opacity-50'}>
                                        <div style={{width: '50px'}}>{` طول : `}</div>
                                        <div className={''}>{ product[0].product[0].height} سانتی متر </div>
                                    </div>
                                    <div className={'mt-2 px-4 py-1 d-flex opacity-50'}>
                                        <div style={{width: '50px'}}>{` عرض : `}</div>
                                        <div className={''}>{ product[0].product[0].width} سانتی متر </div>
                                    </div>
                                    <div className={'mt-2 px-4 py-1 d-flex opacity-50'}>
                                        <div style={{width: '50px'}}>{` ارتفاع : `}</div>
                                        <div className={''}>{ product[0].product[0].depth} سانتی متر </div>
                                    </div>
                                    <div className={'mt-2 px-4 py-1 d-flex opacity-50'}>
                                        <div style={{width: '50px'}}>{` وزن : `}</div>
                                        <div className={''}>{ product[0].product[0].Weight} گرم </div>
                                    </div>
                                </>
                                : null
                            }


                        </div>

                        {/*price*/}
                        <div className={`${styles.priceBox}`}>
                            { console.log(priceTop) }
                            { console.log(priceDown) }
                        </div>
                    </div>
                    :null
                }


            </div>
        </div>

    );
};

export default Product;
