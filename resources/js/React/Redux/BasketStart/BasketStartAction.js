import axios from "axios";

const fetchBasketStartRequest = () => {
    return {
        type: "REQUEST_BASKET_START",
    }
}
const fetchBasketStartSuccess = (data) => {
    return {
        type: "SUCCESS_BASKET_START",
        payload: data
    }
}
const fetchBasketStartError = (error) => {
    return {
        type: "ERROR_BASKET_START",
        payload: error
    }
}


export const fetchBasketStartApi = () => {
    return (dispatch) => {
        dispatch(fetchBasketStartRequest());
        axios.get('http://127.0.0.1:8000/api/basket/index')
            .then(response => {
                const basket = response.data;
                dispatch(fetchBasketStartSuccess(basket));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchBasketStartError(message));
            })
    }
}
