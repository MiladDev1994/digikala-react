import React, {useState} from 'react';
import styles from './Item.module.css';
import {Link} from "react-router-dom";

const Item = ({data , index}) => {
    
    const [link , setLink] = useState(true);

    return (
        <Link
            to={link ? `/${data.id}` : '/'}
            className={`${styles.item} d-flex align-items-center justify-content-center px-2`}
            onMouseDown={() => setLink(true)}
            onMouseMove={() => setLink(false)}
        >
            <img height={'80%'} src={`http://127.0.0.1:8000/images/${data.product[0].image.split(',')[0]}`} className={'rounded-3'}/>
            <h4 className={'text-info'}>{index+1}</h4>
            <div className={(index+1) % 3 === 0 ? 'h-100 text-light opacity-50' : 'h-100 text-light opacity-50 border-bottom border-secondary' }>{data.product[0].name}</div>
        </Link>
    );
};

export default Item;
