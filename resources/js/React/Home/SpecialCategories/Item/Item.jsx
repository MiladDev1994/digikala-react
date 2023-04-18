import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Item = ({data , index}) => {
    const [link , setLink] = useState(true);
    return (
        <Link
            to={link ? `/${data.id}` : '/'}
            className={'position-absolute border-end border-opacity-25 border-secondary h-100 d-flex align-items-center justify-content-center flex-column'}
            style={{width:'200px', right: `${index*200}px`}}
            onMouseDown={() => setLink(true)}
            onMouseMove={() => setLink(false)}
        >
            <img width={'50%'} src={`http://127.0.0.1:8000/images/${data.image}`} />
            <div className={'text-light opacity-75'}>{data.name}</div>
        </Link>
    );
};

export default Item;
