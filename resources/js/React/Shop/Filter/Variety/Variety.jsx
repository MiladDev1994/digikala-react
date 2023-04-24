import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchTypesApi} from "../../../Redux/Types/TypesAction";
import Color from "./Color/Color";
import Size from "./Size/Size";
import Weight from "./Weight/Weight";
import Volume from "./volume/volume";
import Number from "./Number/Number";

const Variety = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTypesApi());
    } , [])

    return (
        <div className={'border rounded-2 border-secondary border-opacity-25 mt-4 p-2'}>
            <div style={{fontSize: '16px'}} className={'text-light pb-2 px-1 opacity-75 text-center'}> تنوع ها </div>
            <Color />
            <Size />
            <Weight />
            <Volume />
            <Number />
        </div>
    );
};

export default Variety;
