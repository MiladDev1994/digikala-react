import axios from "axios";

const fetchCategoriesRequest = () => {
    return {
        type: 'REQUEST_CATEGORY',
    }
}

const fetchCategoriesSuccess = (product) => {
    return {
        type: 'SUCCESS_CATEGORY',
        payload: product,
    }
}

const fetchCategoriesFailur =(error) => {
    return {
        type: 'ERROR_CATEGORY',
        payload: error,
    }
}

export const fetchCategoriesApi = () => {
    return (dispatch) => {
        dispatch(fetchCategoriesRequest());
        axios.get('http://127.0.0.1:8000/api/category')
            .then(response => {
                const product = response.data;
                dispatch(fetchCategoriesSuccess(product))
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchCategoriesFailur(message))
            })
    }
}
