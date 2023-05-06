import React from 'react';
import {Link} from "react-router-dom";
import {BeatLoader} from "react-spinners";
const Comment = ({comment}) => {

    return (
        <div>

            {comment.length ?
                comment.map((item , index) =>
                    <div key={item.id} className={`d-flex align-items-center justify-content-start p-3 ${index !== comment.length-1 && `border-bottom border-secondary border-opacity-25`} `}>
                        <Link to={`/product/${item.product_id}`} target={'_blank'}>
                            <img width={'80px'} className={'rounded-2 shadow'} src={`http://127.0.0.1:8000/images/${item.product.image.split(',')[0]}`}/>
                        </Link>


                        <div className={'py-2 ps-4 w-100'}>
                            <div className={'d-flex  align-items-center justify-content-start'}>
                                <div className={` px-3 rounded-1 shadow me-3 text-dark ${item.score < 2 ? `bg-danger` : item.score < 4 ? `bg-warning` : `bg-success` } `}>{item.score}</div>
                                <h5 className={`opacity-75 `}>{item.titr}</h5>
                            </div>


                            <div className={'mt-1'}>
                                {item.proposal ?
                                    <div className={'d-flex mt-2 align-items-center text-success'}>
                                        <i className={'bi-hand-thumbs-up h5 mt-2'} />
                                        <div className={'ms-3'}>توصیه میکنم</div>
                                    </div>
                                    :
                                    <div className={'d-flex mt-2 align-items-center text-danger '}>
                                        <i className={'bi-hand-thumbs-down h5 mt-2'} />
                                        <div className={'ms-3'}>توصیه نمیکنم</div>
                                    </div>

                                }
                            </div>

                            <p className={'text-light opacity-75 mt-2'}>{item.text}</p>
                        </div>
                    </div>
                )
                :
                <div style={{minHeight: '250px'}} className={'d-flex mt-2 align-items-center justify-content-center'}>
                    <BeatLoader
                        color="white"
                        cssOverride={{}}
                        loading
                        speedMultiplier={1}
                        size={25}
                        margin={10}
                        className={'opacity-50'}
                    />
                </div>
            }
        </div>
    );
};

export default Comment;

