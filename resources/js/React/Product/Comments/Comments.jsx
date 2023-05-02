import React, {useEffect, useState} from 'react';
import styles from './Comments.module.css';
import AddComment from "../Comments/AddComment/AddComment";
import Product from "../Comments/Product/Product";
import View from "../Comments/View/View";
import axios from "axios";
import {useParams} from "react-router-dom";

const Comments = () => {

    const [comment , setComment] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/comments/${params.id}`)
            .then(response => setComment(response.data))
    } , [])

    return (
        <div className={`w-100 align-items-stretch py-3 ${styles.commentsBox}`}>
            <div className={`${styles.addBox} px-2`}>
                <AddComment comments={comment} />
            </div>

            <div className={`${styles.usersBox} border-end border-start border-secondary border-opacity-25 p-2`}>
                <View comments={comment} />
            </div>

            <div className={`${styles.similarBox} px-2`}>
                <Product />
            </div>
        </div>
    );
};

export default Comments;
