import axios from "axios";

const fetchOrderRequest = () => {
    return {
        type: "REQUEST_ORDER",
    }
}
const fetchOrderSuccess = (data) => {
    return {
        type: "SUCCESS_ORDER",
        payload: data
    }
}
const fetchOrderError = (error) => {
    return {
        type: "ERROR_ORDER",
        payload: error
    }
}


export const fetchOrderApi = () => {
    return (dispatch) => {
        dispatch(fetchOrderRequest());
        axios.get('http://127.0.0.1:8000/api/order')
            .then(response => {
                const data = response.data;
                dispatch(fetchOrderSuccess(data));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchOrderError(message));
            })
    }
}
