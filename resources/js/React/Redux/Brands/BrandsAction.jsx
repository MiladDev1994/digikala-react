import axios from "axios";

const fetchBrandsRequest = () => {
    return {
        type: "REQUEST_BRANDS",
    }
}
const fetchBrandsSuccess = (data) => {
    return {
        type: "SUCCESS_BRANDS",
        payload: data
    }
}
const fetchBrandsError = (error) => {
    return {
        type: "ERROR_BRANDS",
        payload: error
    }
}


export const fetchBrandsApi = () => {
    return (dispatch) => {
        dispatch(fetchBrandsRequest());
        axios.get('http://127.0.0.1:8000/api/brands')
            .then(response => {
                const data = response.data;
                dispatch(fetchBrandsSuccess(data));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchBrandsError(message));
            })
    }
}
