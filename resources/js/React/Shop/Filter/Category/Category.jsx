import React, {useContext, useState} from 'react';
import styles from './Category.module.css';
import {useSelector} from "react-redux";
import {queryStringContext} from "../../Context/queryStringContextProvider";

const Category = () => {

    const [search , setSearch] = useState('');
    const [accordion , setAccordion] = useState(false);
    const {query , setQuery} = useContext(queryStringContext)

    const categories = useSelector(item => item.category.data).filter(element => !element.child.length)
    const filter = categories.filter(item => item.name.includes(search))

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
        <div className={'w-100 text-light rounded-3 border border-secondary border-opacity-25 shadow'}>
            <div onClick={() => setAccordion(prevAccordion => !prevAccordion)} className={`${styles.head}  d-flex align-items-center justify-content-between py-2 px-3`}>
                <div className={1}>دسته ها</div>
                <i className={`${accordion ? styles.headIconShow : styles.headIconHidden} bi-chevron-down`}/>
            </div>

            <div className={`${accordion ? styles.listShow : styles.listHidden}`}>
                <div className={'w-100 d-flex px-2 mt-2'}>
                    <input type={'text'} value={search} onChange={e => setSearch(e.target.value)} className={`${styles.input} w-100 bg-dark rounded-3 text-light text-center py-1 shadow`} placeholder={'جستوجو....'}/>
                </div>

                <div className={`${styles.Data} p-2 ms-2`}>
                    {categories.length ?
                        filter.map(item =>
                            <div key={item.id} className={`position-relative p-2 mt-1 rounded-3 opacity-75 ${styles.item} ${query.category.includes(`${item.id}`) ? 'bg-primary' : ''}`}>
                                <input type={'checkbox'} checked={query.category.includes(`${item.id}`) ? true : false} name={'category'} value={item.id} onChange={queryStringHaandler} className={'position-absolute w-100 h-100 opacity-0'} style={{top: 0 , cursor:'pointer'}} />
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
