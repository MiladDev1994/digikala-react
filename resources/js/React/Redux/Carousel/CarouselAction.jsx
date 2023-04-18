import axios from "axios";

const fetchCarouselRequest = () => {
    return {
        type: "REQUEST_CAROUSEL",
    }
}
const fetchCarouselSuccess = (data) => {
    return {
        type: "SUCCESS_CAROUSEL",
        payload: data
    }
}
const fetchCarouselError = (error) => {
    return {
        type: "ERROR_CAROUSEL",
        payload: error
    }
}


export const fetchCarouselApi = () => {
    return (dispatch) => {
        dispatch(fetchCarouselRequest());
        axios.get('http://127.0.0.1:8000/api/carousel')
            .then(response => {
                const data = response.data;
                dispatch(fetchCarouselSuccess(data));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchCarouselError(message));
            })
    }
}
