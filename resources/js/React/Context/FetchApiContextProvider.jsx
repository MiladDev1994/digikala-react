import React, {createContext , useState , useContext , useEffect} from 'react';
export const FetchApiContext = createContext();
import {queryStringContext} from "../Shop/Context/queryStringContextProvider";
import {useParams} from "react-router-dom";
import axios from "axios";

const FetchApiContextProvider = ({children}) => {

    const [variety , setVariety] = useState([]);
    const {query , setQuery} = useContext(queryStringContext);
    const [page , setPage] = useState(1)
    const params = useParams();
    const id = params.id.split('-')[1];
    const types = params.id.split('-')[0];

    const getData = async () => {
        const response = await axios.post(`/api/varieties?page=${page}` , {
            type:types,
            id:id ,
            query:query,
        });
        page === 1 ?
            setVariety(response.data.data) :
            setVariety(prev =>[...prev , ...response.data.data])
    }

    const scrollHandler = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight){
                setPage(prev => prev + 1);
            }
        } catch (error){
            console.log(error);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll' , scrollHandler)
    } , [])

    useEffect(() => {
        getData();
    } , [page])

    useEffect(() => {
        page === 1 ?
            getData():
            setPage(1);
        document.documentElement.scrollTop = 0;
    } , [query , params]);


    return (
        <FetchApiContext.Provider value={variety}>
            {children}
        </FetchApiContext.Provider>
    );
};

export default FetchApiContextProvider;
