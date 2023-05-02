import React, {useContext} from 'react';
import {ProductContext} from "../../Context/ProductContexProvider";

const View = ({comments}) => {

    const {product} = useContext(ProductContext)

    const buyerHandler = (orders) => {
        let user = false
        if (product.length && orders.map(item => (!!product.find(element => element.id === item.variety_id))).includes(true)){
            user = true;
        }
        return user
    }

    return (
        <>
            {comments.length ?
                comments.map(item =>
                    <div key={item.id} className={'p-3 border-bottom border-secondary border-opacity-25'}>
                        <div className={'d-flex'}>
                            <div className={`${item.score <= 1 ? `bg-danger` : item.score <= 3 ? `bg-warning` : `bg-success`} text-dark px-3 mt-1 rounded-2`}>{item.score}</div>
                            <h5 className={'ms-3 m-0 text-light opacity-75'}>{item.titr}</h5>
                        </div>

                        <div className={'d-flex mt-2 align-items-center '}>
                            <div className={`text-light mt-1 opacity-50`}>{item.solar_date.split(' ')[0].replace('-' , '/').replace('-' , '/')}</div>
                            <div className={'ms-3  m-0 text-light opacity-50'}>{item.user.name}</div>
                            <div className={'ms-3  m-0 text-light bg-dark py-1 px-2 rounded-2 opacity-50'}>{buyerHandler(item.orders) ? 'خریدار' : ''}</div>
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

                        <p className={'text-light opacity-75'}>{item.text}</p>

                    </div>
                )
                :
                <h2 className={'w-100 h-100 d-flex align-items-center justify-content-center opacity-50'}>لطفا دیدگاه خود را اضافه کنید!!!</h2>

            }
        </>
    );
};

export default View;
