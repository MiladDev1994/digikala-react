import React, {useEffect, useState} from 'react';
import styles from "./Form.module.css";
import Form from 'react-bootstrap/Form';
import useValidate from "./useValidate";
import axios from "axios";
import {useParams} from "react-router-dom";
const FormComment = ({setShow}) => {

    const params = useParams();
    const [error , setError] = useState({})
    const [success , setSuccess] = useState('')
    const [value, setValue] = useState({
        score: '4',
        proposal: '0',
        title: '',
        about: '',
    });
    const [action, setAction] = useState({
        proposal: false,
        title: false,
        about: false,
    });


    useEffect(() => {
        setError(useValidate(value))
    } , [value])

    const submitHandler = (e) => {
        e.preventDefault()
        setAction({
            proposal: true,
            title: true,
            about: true,
        })
        if (!Object.keys(error).length){
            axios.post('/api/comment/store' , {
                score: e.target[0].value,
                proposal: value.proposal,
                title: e.target[3].value,
                about: e.target[4].value,
                product: params.id,
            })
                .then(response => {
                    setSuccess('نظر شما با موفقیت ثبت شد');
                    setInterval(() => {
                        setShow(false);
                    } , 2000)
                })
        }
    }
    return (
        <form onSubmit={submitHandler}>
            {success !== '' && <div className={'position-absolute text-success w-100 text-center'} style={{top: '-40px', right: '0'}}>{success}</div>

            }
            <div className={'border-bottom border-secondary border-opacity-25 pb-3'}>
                <div className={'text-light text-start opacity-75'}>امتیاز (از 0 تا 5)</div>
                <Form.Range
                    name={'score'}
                    min={0}
                    max={5}
                    defaultValue={value.score}
                    className={'mt-1'}
                    onChange={e => setValue({...value , score: e.target.value})}
                />
                <div className={'text-light d-flex align-items-center justify-content-between opacity-50 px-1'}>
                    <div>0</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>
            </div>

            <div className={'border-bottom border-secondary border-opacity-25 py-2 position-relative'}>
                {error.proposal && action.proposal ?
                    <div className={'position-absolute text-danger'} style={{top: '17px',left: '10px', fontSize: '12px'}}>{error.proposal}</div>
                    : null
                }
                <div className={'text-light text-start opacity-75 mt-1'}>خرید این محصول را توصیه میکند؟</div>
                <div className={`d-flex align-items-center justify-content-center`}>
                    <i className={`bi-hand-thumbs-up position-relative border border-secondary border-opacity-50 rounded-3 h4 py-1 px-3 m-2 ${value.proposal === 'ok' ? `text-success shadow` : `text-light opacity-50`}`} style={{transition: '0.3s'}}>
                        <input type={'radio'} name={'proposal'} value={'ok'} onClick={() => setValue({...value , proposal: 'ok'})} className={'w-100 h-100 position-absolute opacity-0'} style={{right: 0, cursor: 'pointer'}}/>
                    </i>
                    <i className={`bi-hand-thumbs-down position-relative border border-secondary border-opacity-50 rounded-3 h4 py-1 px-3 m-2 ${value.proposal === 'no' ? `text-danger shadow` : `text-light opacity-50`}`} style={{transition: '0.3s'}}>
                        <input type={'radio'} name={'proposal'} value={'no'} onClick={() => setValue({...value , proposal: 'no'})} className={'w-100 h-100 position-absolute opacity-0'} style={{right: 0, cursor: 'pointer'}}/>
                    </i>
                </div>
            </div>


            <div className={'border-bottom border-secondary border-opacity-25 py-3 position-relative'}>
                <div className={'text-light text-start opacity-75'}>عنوان نظر</div>
                {error.title && action.title ?
                    <div className={'position-absolute text-danger'} style={{top: '30px',left: '10px', fontSize: '12px'}}>{error.title}</div>
                    : null
                }
                <input
                    type={'text'}
                    className={`w-100 mt-3 border-secondary  input-group-text bg-dark text-light text-start ${styles.input}`}
                    value={value.title}
                    onChange={e => setValue({...value , title: e.target.value})}
                    onBlur={() => setAction({...action , title:true})}
                />
            </div>

            <div className={' py-3 position-relative'}>
                <div className={'text-light text-start opacity-75'}>توضیحات</div>
                {error.about && action.about ?
                    <div className={'position-absolute text-danger'} style={{top: '30px',left: '10px', fontSize: '12px'}}>{error.about}</div>
                    : null
                }
                <textarea
                    className={`w-100 mt-3 border-secondary  input-group-text bg-dark text-start text-light ${styles.input}`}
                    style={{minHeight: '70px'}}
                    onChange={e => setValue({...value , about: e.target.value})}
                    onBlur={() => setAction({...action , about:true})}
                ></textarea>
            </div>

            <button className={'btn btn-success d-block m-auto mt-3'}>ارسال</button>
        </form>
    );
};

export default FormComment;
