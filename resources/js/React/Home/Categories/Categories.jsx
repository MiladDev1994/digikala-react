import React from 'react';
import styles from './Categories.module.css';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Categories = () => {
    const data = useSelector(item => item.category.data)
    return (
        <div className={'w-100 p-3 '}>
            <h4 className={'text-center py-3 mt-3 text-light'}>دسته&zwnj;بندی&zwnj;های دیجی کالا</h4>
            <div className={styles.box}>
                <div className={'row d-flex align-items-center justify-content-center'}>
                    {data.length ?
                        data.map(element => element.level === 1 ?
                            <Link className={'col-6 col-sm-4 col-lg-2  text-light mt-3 d-flex align-items-center justify-content-center flex-column'} key={element.id}>
                                <img width={'80%'} src={`http://127.0.0.1:8000/images/${element.image}`} />
                                <div className={styles.name}>{element.name}</div>
                            </Link>
                            : null
                        )
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;
