import axios from "axios";

const fetchHomeViewRequest = () => {
    return {
        type: "REQUEST_HOMEVIEW",
    }
}
const fetchHomeViewSuccess = (homeview , specialVariety , SpecialCategoryVarieties , moreSell) => {
    return {
        type: "SUCCESS_HOMEVIEW",
        payload: [homeview , specialVariety , SpecialCategoryVarieties , moreSell]
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
        axios.all([
            axios.get('http://127.0.0.1:8000/api/homeView'),
            axios.get('http://127.0.0.1:8000/api/specialVariety'),
            axios.get('http://127.0.0.1:8000/api/SpecialCategoryVarieties'),
            axios.get('http://127.0.0.1:8000/api/moreSell'),
        ])

            .then(response => {
                const homeview = response[0].data;
                const specialVariety = response[1].data;
                const SpecialCategoryVarieties = response[2].data;
                const moreSell = response[3].data;
                dispatch(fetchHomeViewSuccess(homeview , specialVariety , SpecialCategoryVarieties , moreSell));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchHomeViewError(message));
            })
    }
}
