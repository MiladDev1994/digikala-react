import axios from "axios";

const fetchArticleRequest = () => {
    return {
        type: "REQUEST_ARTICLE",
    }
}
const fetchArticleSuccess = (data) => {
    return {
        type: "SUCCESS_ARTICLE",
        payload: data
    }
}
const fetchArticleError = (error) => {
    return {
        type: "ERROR_ARTICLE",
        payload: error
    }
}


export const fetchArticleApi = () => {
    return (dispatch) => {
        dispatch(fetchArticleRequest());
        axios.get('http://127.0.0.1:8000/api/articles')
            .then(response => {
                const data = response.data;
                dispatch(fetchArticleSuccess(data));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchArticleError(message));
            })
    }
}
