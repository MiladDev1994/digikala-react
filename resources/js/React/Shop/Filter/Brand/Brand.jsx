import React, {useContext, useEffect, useState} from 'react';
import styles from './Brand.module.css';
import {useSelector , useDispatch} from "react-redux";
import {fetchBrandsApi} from "../../../Redux/Brands/BrandsAction";
import {queryStringContext} from "../../Context/queryStringContextProvider";

const Category = () => {

    const [search , setSearch] = useState('');
    const [accordion , setAccordion] = useState(false);
    const {query , setQuery} = useContext(queryStringContext)
    // console.log(query)

    const brands = useSelector(item => item.brand.data);
    const dispatch = useDispatch();
    const filter = brands.filter(item => item.name.includes(search))

    const queryStringHaandler = (e) => {
        if (e.target.checked){
            setQuery({...query , ...query[e.target.name].push(e.target.value)})
        }else {
            let index = query[e.target.name].indexOf(e.target.value)

            query[e.target.name].splice(index , 1);
            setQuery({...query})
        }
    }
console.log(query)
    useEffect(() => {
        dispatch(fetchBrandsApi());
    } , [])

    return (
        <div className={'w-100 text-light'}>
            <div onClick={() => setAccordion(prevAccordion => !prevAccordion)} className={`${styles.head} d-flex align-items-center justify-content-between py-2 px-3`}>
                <div className={1}>برند ها</div>
                <i className={`${accordion ? styles.headIconShow : styles.headIconHidden} bi-chevron-down`}/>
            </div>

            <div className={`${accordion ? styles.listShow : styles.listHidden} border-bottom border-secondary border-opacity-25`}>
                <div className={'w-100 d-flex px-2 mt-2'}>
                    <input type={'text'} value={search} onChange={e => setSearch(e.target.value)} className={`${styles.input} w-100 bg-dark rounded-3 text-light text-center py-1 shadow`} placeholder={'جستوجو....'}/>
                </div>

                <div className={`${styles.Data} p-2`}>
                    {brands.length ?
                        filter.map(item =>
                            <div key={item.id} className={`position-relative p-2 mt-1 rounded-3 opacity-75 ${styles.item} ${query.brand.includes(`${item.id}`) ? 'bg-primary' : ''}`}>
                                <input type={'checkbox'} checked={query.brand.includes(`${item.id}`) ? true : false} name={'brand'} value={item.id} onChange={queryStringHaandler} className={'position-absolute w-100 h-100 opacity-0'} style={{top: 0 , cursor:'pointer'}} />
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

export default Category;
