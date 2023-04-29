import React , {useContext} from 'react';
import styles from "./SellSpecial.module.css";
import {queryStringContext} from "../../Context/queryStringContextProvider";
import {useParams} from "react-router-dom";


const SellSpecial = () => {


    const {query , setQuery} = useContext(queryStringContext);
    const params = useParams();
    const types = params.id.split('-')[0];

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
        <div className={'w-100 mt-3 text-light d-flex align-items-center justify-content-center'}>
            {types !== 'moreSell' ?
                <div className={`position-relative p-2 mt-1 rounded-3 opacity-75 me-1 d-flex align-items-center justify-content-center shadow ${styles.item} ${query.moreSell.includes(`true`) ? 'bg-primary' : ''}`} style={{width: '110px'}}>
                    <input type={'checkbox'} checked={query.moreSell.includes(`true`) ? true : false} name={'moreSell'} value={`true`} onChange={queryStringHaandler} className={'position-absolute w-100 h-100 opacity-0'} style={{top: 0 , cursor:'pointer'}} />
                    پرفروش ها
                </div>
                : null
            }

            {types !== 'special' ?
                <div className={`position-relative p-2 mt-1 rounded-3 opacity-75 ms-1 d-flex align-items-center justify-content-center shadow ${styles.item} ${query.special.includes(`true`) ? 'bg-primary' : ''}`} style={{width: '110px'}}>
                    <input type={'checkbox'} checked={query.special.includes(`true`) ? true : false} name={'special'} value={`true`} onChange={queryStringHaandler} className={'position-absolute w-100 h-100 opacity-0'} style={{top: 0 , cursor:'pointer'}} />
                    شگفت انگیزها
                </div>
                : null
            }


        </div>
    );
};

export default SellSpecial;
