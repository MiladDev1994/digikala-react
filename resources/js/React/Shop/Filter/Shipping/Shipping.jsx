import React, {useContext, useState} from 'react';
import styles from './Shipping.module.css';
import {useSelector} from "react-redux";
import {queryStringContext} from "../../Context/queryStringContextProvider";

const Shipping = () => {

    const [accordion , setAccordion] = useState(false);
    const {query , setQuery} = useContext(queryStringContext)

    const Shipp = [
        {name: '1 روزه' , value: '1' },
        {name: '2 روزه' , value: '2' },
        {name: '3 روزه' , value: '3' },
        {name: '4 روزه' , value: '4' },
        {name: '5 روزه' , value: '5' },
    ]

    const queryStringHaandler = (e) => {
        if (e.target.checked){
            setQuery({...query , ...query[e.target.name].push(e.target.value)})
        }else {
            let index = query[e.target.name].indexOf(e.target.value)

            query[e.target.name].splice(index , 1);
            setQuery({...query})
        }
    }

    return (
        <div className={'w-100 text-light mt-2 rounded-3 border border-secondary border-opacity-25 shadow'}>
            <div onClick={() => setAccordion(prevAccordion => !prevAccordion)} className={`${styles.head}  d-flex align-items-center justify-content-between py-2 px-3`}>
                <div className={1}>بازه ارسال</div>
                <i className={`${accordion ? styles.headIconShow : styles.headIconHidden} bi-chevron-down`}/>
            </div>

            <div className={`${accordion ? styles.listShow : styles.listHidden} `}>

                <div className={`p-2 ms-2`}>
                    {
                        Shipp.map(item =>
                            <div key={item.value} className={`position-relative p-2 mt-1 rounded-3 opacity-75 ${styles.item} ${query.shipping.includes(`${item.value}`) ? 'bg-primary' : ''}`}>
                                <input type={'checkbox'} checked={query.shipping.includes(`${item.value}`) ? true : false} name={'shipping'} value={item.value} onChange={queryStringHaandler} className={'position-absolute w-100 h-100 opacity-0'} style={{top: 0 , cursor:'pointer'}} />
                                {item.name}
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Shipping;
