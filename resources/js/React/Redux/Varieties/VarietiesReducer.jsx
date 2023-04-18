const initialState = {
    data: [],
    error: '',
}

const varietiesReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_VARIETIES" :
            return state;
        case "SUCCESS_VARIETIES" :
            return {
                data: action.payload,
                error: ''
            }
        case "ERROR_VARIETIES" :
            return {
                data: [],
                error: action.payload,
            }
        default :
            return state;
    }
}

export default varietiesReducer;
