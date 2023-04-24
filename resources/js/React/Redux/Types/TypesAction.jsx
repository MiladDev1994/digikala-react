import axios from "axios";

const fetchTypesRequest = () => {
    return {
        type: "REQUEST_TYPES",
    }
}
const fetchTypesSuccess = (data) => {
    return {
        type: "SUCCESS_TYPES",
        payload: data
    }
}
const fetchTypesError = (error) => {
    return {
        type: "ERROR_TYPES",
        payload: error
    }
}


export const fetchTypesApi = () => {
    return (dispatch) => {
        dispatch(fetchTypesRequest());
        axios.get('http://127.0.0.1:8000/api/types')
            .then(response => {
                const types = response.data;
                dispatch(fetchTypesSuccess(types));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchTypesError(message));
            })
    }
}
