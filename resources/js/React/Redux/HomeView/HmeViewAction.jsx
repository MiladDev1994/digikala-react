import axios from "axios";

const fetchHomeViewRequest = () => {
    return {
        type: "REQUEST_HOMEVIEW",
    }
}
const fetchHomeViewSuccess = (data) => {
    return {
        type: "SUCCESS_HOMEVIEW",
        payload: data
    }
}
const fetchHomeViewError = (error) => {
    return {
        type: "ERROR_HOMEVIEW",
        payload: error
    }
}


export const fetchHomeViewApi = () => {
    return (dispatch) => {
        dispatch(fetchHomeViewRequest());
        axios.get('http://127.0.0.1:8000/api/homeView')
            .then(response => {
                const data = response.data;
                dispatch(fetchHomeViewSuccess(data));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchHomeViewError(message));
            })
    }
}
