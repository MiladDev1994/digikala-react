import axios from "axios";

const fetchRequest = () => {
    return {
        type: 'REQUEST',
    }
}

const fetchSuccess = (product) => {
    return {
        type: 'SUCCESS',
        payload: product,
    }
}

const fetchFailur =(error) => {
    return {
        type: 'ERROR',
        payload: error,
    }
}

export const fetchApi = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get('http://127.0.0.1:8000/api/category')
            .then(response => {
                const product = response.data;
                dispatch(fetchSuccess(product))
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchFailur(message))
            })
    }
}
