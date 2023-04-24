import React, {useContext, useState} from 'react';
import styles from '../TypesItem.module.css';
import {useSelector} from "react-redux";
import {queryStringContext} from "../../../Context/queryStringContextProvider";


const Volume = () => {

    const [search , setSearch] = useState('');
    const [accordion , setAccordion] = useState(false);
    const {query , setQuery} = useContext(queryStringContext)

    const data = useSelector(item => item.types.data);
    const volume = data.filter(item => item.type === 'volume');
    const filter = volume.filter(item => item.name.includes(search))

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
        <div className={'w-100 text-light'}>
            <div onClick={() => setAccordion(prevAccordion => !prevAccordion)} className={`${styles.head} d-flex align-items-center justify-content-between py-2 px-3`}>
                <div className={1}>حجم</div>
                <i className={`${accordion ? styles.headIconShow : styles.headIconHidden} bi-chevron-down`}/>
            </div>

            <div className={`${accordion ? styles.listShow : styles.listHidden} border-bottom border-secondary border-opacity-25`}>
                <div className={'w-100 d-flex px-2 mt-2'}>
                    <input type={'text'} value={search} onChange={e => setSearch(e.target.value)} className={`${styles.input} w-100 bg-dark rounded-3 text-light text-center py-1 shadow`} placeholder={'جستوجو....'}/>
                </div>

                <div className={`${styles.Data} p-2`}>
                    {data.length ?
                        filter.map(item =>
                            <div key={item.id} className={`position-relative p-2 mt-1 rounded-3 opacity-75 ${styles.item} ${query.variety.includes(item.name) ? 'bg-primary' : ''}`}>
                                <input type={'checkbox'} checked={query.variety.includes(item.name) ? true : false} name={'variety'} value={item.name} onChange={queryStringHaandler} className={'position-absolute w-100 h-100 opacity-0'} style={{top: 0 , cursor:'pointer'}} />
                                {item.name}
                            </div>
                        )
                        :null
                    }
                </div>

            </div>
        </div>
    );
};

export default Volume;
