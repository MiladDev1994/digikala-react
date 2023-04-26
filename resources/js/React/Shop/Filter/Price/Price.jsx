import React, {useContext, useRef , useState , useCallback , useEffect} from 'react';
import styles from './Price.module.css';
import Toman from '../../../../../../public/images/tomanLight.svg'
import {queryStringContext} from "../../Context/queryStringContextProvider";

const Price = () => {

    const {query , setQuery} = useContext(queryStringContext)


    const changeCheck = (e) => {

        if (e.target.name === "minPrice"){
            const value = Math.min(Number(e.target.value), maxVal - 1);
            setMinVal(value);
            // if (Number(e.target.value) === 0 || e.target.value === ''){
            //     setQuery({
            //         ...query,
            //         [e.target.name] : [],
            //     })
            // }else {
            //     setQuery({
            //         ...query,
            //         [e.target.name]: [e.target.value],
            //     })
            // }
        }else if (e.target.name === "maxPrice"){
            const value = Math.max(Number(e.target.value), minVal + 1);
            setMaxVal(value);
            // if (Number(e.target.value) === 999999999 || e.target.value === ''){
            //     setQuery({
            //         ...query,
            //         [e.target.name] : [],
            //     })
            // }else {
            //     setQuery({
            //         ...query,
            //         [e.target.name]: [e.target.value],
            //     })
            // }
        }

    }

    const queryHandler = (e) => {
        if (e.target.name === "minPrice"){
            // const value = Math.min(Number(e.target.value), maxVal - 1);
            // setMinVal(value);
            if (Number(e.target.value) === min || e.target.value === ''){
                setQuery({
                    ...query,
                    [e.target.name] : [],
                })
            }else {
                setQuery({
                    ...query,
                    [e.target.name]: [e.target.value],
                })
            }
        }else if (e.target.name === "maxPrice"){
            // const value = Math.max(Number(e.target.value), minVal + 1);
            // setMaxVal(value);
            if (Number(e.target.value) === max || e.target.value === ''){
                setQuery({
                    ...query,
                    [e.target.name] : [],
                })
            }else {
                setQuery({
                    ...query,
                    [e.target.name]: [e.target.value],
                })
            }
        }
    }





    let min = 5000;
    let max = 150000000;
    const [minVal, setMinVal] = useState(!!query.minPrice.length ? Number(query.minPrice) : min);
    const [maxVal, setMaxVal] = useState(!!query.maxPrice.length ? Number(query.maxPrice) : max);

    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);
        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <div className={` border border-secondary border-opacity-25 rounded-3 mt-3 shadow p-2 text-light`} dir={'ltr'}>

            <div className={'d-flex align-items0center justify-content-between px-2 bg-dark py-2 rounded-2'}>
                <img src={Toman} width={"25px"}/>
                <div className={`${styles.range} text-end`}> {minVal.toLocaleString()} </div>
                <div className={styles.subject}> از </div>
            </div>

            <div className={'d-flex align-items0center justify-content-between px-2 bg-dark py-2 mt-2 rounded-2'}>
                <img src={Toman} width={"25px"}/>
                <div className={`${styles.range} text-end`}> {maxVal.toLocaleString()} </div>
                <div className={styles.subject}> تا </div>
            </div>


            <div className={`${styles.container}`}>
                <input
                    type="range"
                    name={'minPrice'}
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={changeCheck}
                    className={`${styles.thumb} ${styles.thumb__left}`}
                    style={{ zIndex: minVal > max * 0.5 && "5" }}
                    onMouseUp={queryHandler}
                />
                <input
                    type="range"
                    name={'maxPrice'}
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={changeCheck}
                    className={`${styles.thumb} ${styles.thumb__right}`}
                    onMouseUp={queryHandler}
                />



                <div className={`${styles.slider}`}>
                    <div className={`${styles.slider__track} bg-dark shadow`} />
                    <div
                        ref={range}
                        className={styles.slider__range}

                    />
                </div>
            </div>

        </div>
    );
};

export default Price;
