import axios from "axios";

const fetchHomeRequest = () => {
    return {
        type: "REQUEST",
    }
}
const fetchHomeSuccess = (data) => {
    return {
        type: "SUCCESS",
        payload: data
    }
}
const fetchHomeError = (error) => {
    return {
        type: "ERROR",
        payload: error
    }
}


export const fetchHomeApi = () => {
    return (dispatch) => {
        dispatch(fetchHomeRequest());
        axios.get('http://127.0.0.1:8000/api/carousel')
            .then(response => {
                const data = response.data;
                dispatch(fetchHomeSuccess(data));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchHomeError(message));
            })
    }
}
