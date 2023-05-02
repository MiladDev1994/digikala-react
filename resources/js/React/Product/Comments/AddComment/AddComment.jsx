import React, {useContext, useEffect, useState} from 'react';
import styles from './AddComment.module.css';
import useSumScore from "../../Hook/useSumScore";
import {UserContext} from "../../../Context/UseContextProvider";
import {Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import FormComment from "./Form/FormComment";

const AddComment = ({comments}) => {

    const [sumScore , setSumScore] = useState(0);
    const {user} = useContext(UserContext)


    useEffect(() => {
        comments.length &&
        setSumScore(useSumScore(comments))
    } , [comments])

    const [show, setShow] = useState(false);



    return (
        <div className={'w-100  position-sticky'} style={{top: '30%'}}>
            <div className={'text-light d-flex align-items-center justify-content-start'}>
                <h4 className={'mt-1 me-2'}>{sumScore}</h4>
                <div className={'opacity-50'}> از 5 </div>
            </div>

            <div className={`d-flex align-items-center justify-content-start`}>
                <i className={`bi-star-fill ms-1 ${Number(sumScore) > 0.6 ? `text-warning` : `text-dark`}`} />
                <i className={`bi-star-fill ms-1 ${Number(sumScore) > 1.6 ? `text-warning` : `text-dark`}`} />
                <i className={`bi-star-fill ms-1 ${Number(sumScore) > 2.6 ? `text-warning` : `text-dark`}`} />
                <i className={`bi-star-fill ms-1 ${Number(sumScore) > 3.6 ? `text-warning` : `text-dark`}`} />
                <i className={`bi-star-fill ms-1 ${Number(sumScore) > 4.6 ? `text-warning` : `text-dark`}`} />
            </div>

            <div className={'mt-5 px-2 text-light'}>
                <p className={'opacity-50'} style={{fontSize: '13px'}}> لطفا نظر خود را ثبت کنید</p>
                {user.length ?
                    <button onClick={() => setShow(true)} className={'btn btn-dark border border-danger text-light w-100 d-block m-auto'}>ثبت دیدگاه</button>
                    :
                    <Link to={'/login'} className={'btn btn-dark border border-danger text-light w-100 d-block m-auto'}>ثبت دیدگاه</Link>
                }
            </div>





            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className={'bg-dark border-0'}>
                    <i className={'bi-x-lg text-light'} onClick={() => setShow(false)} style={{cursor: 'pointer'}}/>
                </Modal.Header>
                <Modal.Body className={'bg-dark'}>

                    <FormComment setShow={setShow}/>

                </Modal.Body>
            </Modal>



        </div>
    );
};

export default AddComment;
