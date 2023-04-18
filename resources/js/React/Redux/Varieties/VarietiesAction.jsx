import axios from "axios";

const fetchVarietiesRequest = () => {
    return {
        type: "REQUEST_VARIETIES",
    }
}
const fetchVarietiesSuccess = (data) => {
    return {
        type: "SUCCESS_VARIETIES",
        payload: data
    }
}
const fetchVarietiesError = (error) => {
    return {
        type: "ERROR_VARIETIES",
        payload: error
    }
}


export const fetchVarietiesApi = () => {
    return (dispatch) => {
        dispatch(fetchVarietiesRequest());
        axios.get('http://127.0.0.1:8000/api/varieties')
            .then(response => {
                const data = response.data;
                dispatch(fetchVarietiesSuccess(data));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchVarietiesError(message));
            })
    }
}
