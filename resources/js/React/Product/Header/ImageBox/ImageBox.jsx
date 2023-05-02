import React, {useContext, useEffect, useState} from 'react';
import styles from "./ImageBox.module.css";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import {ProductContext} from "../../Context/ProductContexProvider";
import axios from "axios";
import {useParams} from "react-router-dom";

const ImageBox = () => {

    const {product , favorite} = useContext(ProductContext);
    const [showModal, setShowModal] = useState(false);
    const params = useParams()
    const [favoriteResponse , setFavoriteResponse] = useState([]);

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const favoriteHandler = (status) => {
        axios.post('/api/favorite' , {
            status:status,
            product:Number(params.id)
        })
            .then(response => setFavoriteResponse(response.data))
    }
    useEffect(() => {
        setFavoriteResponse(favorite)
    } , [favorite])

    return (
        <div className={`${styles.imageBox} d-flex align-items-center justify-content-center flex-column`}>
            <div className={`${styles.favorite}`}>
                {favoriteResponse.length ?
                    <i className={'bi-heart-fill h3 px-4 text-danger'} style={{cursor: 'pointer'}} onClick={() => favoriteHandler(false)}/> :
                    <i className={'bi-heart h3 px-4 text-light opacity-50'} style={{cursor: 'pointer'}} onClick={() => favoriteHandler(true)}/>
                }
            </div>

            {/*bigImage*/}
            <div
                className={` align-items-center justify-content-center flex-column w-100 ${styles.imageBig}`}
                onClick={() => setShowModal(true)}
            >
                {
                    product.length ?
                        <img width={'90%'} className={'mt-2 rounded-3 shadow'} src={`http://127.0.0.1:8000/images/${product[0].product[0].image.split(',')[0]}`} />
                        : null
                }

                <div className={`mt-2 d-flex w-100 px-2`} style={{height: '80px'}}>
                    {product.length ?
                        product[0].product[0].image.split(',').length > 7 ?
                            product[0].product[0].image.split(',').map((item , index) =>
                                index > 0 && index < 6 &&
                                <div
                                    key={index}
                                    className={`m-1 opacity-75 border-secondary border rounded-2 shadow m-auto ${styles.imageList}`}
                                    style={{backgroundImage: `url(http://127.0.0.1:8000/images/${product[0].product[0].image.split(',')[index]})`}}
                                />
                            ) :
                            product[0].product[0].image.split(',').map((item , index) =>
                                index > 0 && index < product[0].product[0].image.split(',').length-1 &&
                                <div
                                    key={index}
                                    className={`m-1 opacity-75 border-secondary border rounded-2 shadow m-auto ${styles.imageList}`}
                                    style={{backgroundImage: `url(http://127.0.0.1:8000/images/${product[0].product[0].image.split(',')[index]})`}}
                                />
                            )
                        :null
                    }
                </div>
            </div>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                dialogClassName="modal-90vw"
                aria-labelledby="example-custom-modal-styling-title"
                size="xl"
            >

                <Modal.Header  className={'bg-dark  border-0'}>
                    <i  className={'bi-x-lg text-light h5 opacity-50'} onClick={() => setShowModal(false)} style={{cursor: 'pointer'}}/>
                </Modal.Header>
                <Modal.Body className={'bg-dark rounded-bottom'}>
                    <div className={`w-100 ${styles.carouselBoxBigImage}`}>
                        <Carousel  activeIndex={index} onSelect={handleSelect} variant="light" className={'w-100 h-100 p-2'}>
                            {product.length ?
                                product[0].product[0].image.split(',').map((item , index) =>
                                    index < product[0].product[0].image.split(',').length - 1 &&
                                    <Carousel.Item key={index} className={`position-relative w-100 `}
                                        // style={{height: `${modalWidth-20}px`}}
                                    >
                                        <div className={`d-flex align-items-center justify-content-center overflow-hidden w-100 rounded-3 p-2 ${styles.imageCover}`}>
                                            <img className={' rounded-3 shadow h-100'} src={`http://127.0.0.1:8000/images/${item}`} />
                                        </div>
                                    </Carousel.Item>
                                ) : null
                            }
                        </Carousel>
                    </div>
                </Modal.Body>
            </Modal>


            {/*smallImage*/}
            <div className={`w-100 ${styles.carouselBox}`}>
                <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" className={'w-100'}>
                    {product.length ?
                        product[0].product[0].image.split(',').map((item , index) =>
                            index < product[0].product[0].image.split(',').length - 1 &&
                            <Carousel.Item key={index} className={`position-relative`} >
                                <div style={{width: '100%', height: document.documentElement.clientWidth}} className={'d-flex align-items-center justify-content-center'}>
                                    <img className={'d-block  rounded-3 shadow'} width={'95%'} src={`http://127.0.0.1:8000/images/${item}`}/>
                                </div>
                            </Carousel.Item>
                        ) : null
                    }
                </Carousel>
            </div>

        </div>
    );
};

export default ImageBox;
