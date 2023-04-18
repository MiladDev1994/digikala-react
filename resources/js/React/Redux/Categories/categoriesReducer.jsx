const initialState = {
    data: [],
    error: '',
}

const categoriesReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_CATEGORY" :
            return state;
        case "SUCCESS_CATEGORY" :
            return {
                data: action.payload,
                error: '',
            }
        case "ERROR_CATEGORY" :
            return {
                data: [],
                error: action.payload
            }
        default :
            return state;
    }
}


export default categoriesReducer;
