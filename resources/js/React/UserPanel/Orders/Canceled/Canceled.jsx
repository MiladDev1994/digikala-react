import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import Toman from '../../../../../../public/images/tomanLight.svg'
import {Link} from "react-router-dom";
import {OrderContext} from "../../../Context/OrderContextProvider";
const Canceled = () => {

    const {sendingOrder , setSendingOrder} = useContext(OrderContext)
    const sendingOrderFirst = useSelector(item => item.order.data).filter(element => element.order_status === 'canceled');

    return (
        <div className={'p-3'}>
            <h5 className={'opacity-50 py-2'}>سفارشات لغو شده</h5>
            {sendingOrder.action ?
                sendingOrder.data.map((item , index) => item.order_status === 'canceled' ?
                    <div key={item.id} className={`w-100 d-flex align-items-center justify-content-start position-relative ${index !== sendingOrderFirst.length-1 && ` border-bottom border-secondary border-opacity-25`} `}>
                        <Link to={`/product/${item.product.id}`} target={'_blank'} >
                            <img className={'rounded-2 shadow'} width={"80px"} src={`http://127.0.0.1:8000/images/${item.product.image.split(',')[0]}`}/>
                        </Link>
                        <div className={'py-4 ps-3 '} >
                            <div className={'opacity-75 mt-2'}>{item.product.name}</div>
                            <div className={'mt-3 d-flex align-items-center justify-content-start'}>
                                {item.type.type === 'color' ?
                                    <>
                                        <div className={'rounded-circle mt-1 me-3 border border-secondary border-opacity-50 shadow'} style={{backgroundColor: item.type.color, width: '25px', height: '25px'}}></div>
                                        <div className={'opacity-50'}>{item.type.name}</div>
                                    </> :
                                    item.type.type === 'single' ? null :
                                        <div className={'opacity-50 border border-secondary border-opacity-50 shadow rounded-3 p-1'}>{item.type.name}</div>

                                }
                            </div>
                            <div className={`mt-3 d-flex align-items-center justify-content-start opacity-50`}>
                                <div style={{fontSize: '18px'}} className={'me-1 mt-1'}>{(item.price / 10).toLocaleString()}</div>
                                <img src={Toman}/>
                            </div>
                            <div style={{fontSize: '18px'}} className={`mt-3 d-flex align-items-center justify-content-start opacity-25`}>{item.number + ' '}عدد </div>

                            <div className={`mt-3 d-flex align-items-center justify-content-start opacity-50`}>
                                <div className={'me-1'}> جمع کل : </div>

                                <div style={{fontSize: '18px'}} className={``}>{(item.number * item.price / 10).toLocaleString()} </div>
                                <img src={Toman}/>
                            </div>

                            <div className={`mt-3 d-flex align-items-center justify-content-start opacity-50`} style={{fontSize: '13px'}}>
                                <div className={'me-1'}> تاریخ ارسال : </div>
                                <div className={`me-3`}>{item.solarDate.split(' ')[0].replace('-' , '/').replace('-' , '/')} </div>
                                <div className={'me-1'}> ساعت : </div>
                                <div className={``}>{item.time} </div>
                            </div>

                        </div>

                    </div>
                    :null
                ) :
                sendingOrderFirst.length ?
                    sendingOrderFirst.map((item , index) =>
                        <div key={item.id} className={`w-100 d-flex align-items-center justify-content-start position-relative ${index !== sendingOrderFirst.length-1 && ` border-bottom border-secondary border-opacity-25`} `}>
                            <Link to={`/product/${item.product.id}`} target={'_blank'} >
                                <img className={'rounded-2 shadow'} width={"80px"} src={`http://127.0.0.1:8000/images/${item.product.image.split(',')[0]}`}/>
                            </Link>
                            <div className={'py-4 ps-3 '} >
                                <div className={'opacity-75 mt-2'}>{item.product.name}</div>
                                <div className={'mt-3 d-flex align-items-center justify-content-start'}>
                                    {item.type.type === 'color' ?
                                        <>
                                            <div className={'rounded-circle mt-1 me-3 border border-secondary border-opacity-50 shadow'} style={{backgroundColor: item.type.color, width: '25px', height: '25px'}}></div>
                                            <div className={'opacity-50'}>{item.type.name}</div>
                                        </> :
                                        item.type.type === 'single' ? null :
                                            <div className={'opacity-50 border border-secondary border-opacity-50 shadow rounded-3 p-1'}>{item.type.name}</div>

                                    }
                                </div>
                                <div className={`mt-3 d-flex align-items-center justify-content-start opacity-50`}>
                                    <div style={{fontSize: '18px'}} className={'me-1 mt-1'}>{(item.price / 10).toLocaleString()}</div>
                                    <img src={Toman}/>
                                </div>
                                <div style={{fontSize: '18px'}} className={`mt-3 d-flex align-items-center justify-content-start opacity-25`}>{item.number + ' '}عدد </div>

                                <div className={`mt-3 d-flex align-items-center justify-content-start opacity-50`}>
                                    <div className={'me-1'}> جمع کل : </div>

                                    <div style={{fontSize: '18px'}} className={``}>{(item.number * item.price / 10).toLocaleString()} </div>
                                    <img src={Toman}/>
                                </div>

                                <div className={`mt-3 d-flex align-items-center justify-content-start opacity-50`} style={{fontSize: '13px'}}>
                                    <div className={'me-1'}> تاریخ ارسال : </div>
                                    <div className={`me-3`}>{item.solarDate.split(' ')[0].replace('-' , '/').replace('-' , '/')} </div>
                                    <div className={'me-1'}> ساعت : </div>
                                    <div className={``}>{item.time} </div>
                                </div>

                            </div>

                        </div>
                    )
                    :null
            }
        </div>
    );
};

export default Canceled;

