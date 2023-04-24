const initialState = {
    data: [],
    error: '',
}

const TypesReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_TYPES" :
            return state;
        case "SUCCESS_TYPES" :
            return {
                data: action.payload,
                error: ''
            }
        case "ERROR_TYPES" :
            return {
                data: [],
                error: action.payload,
            }
        default :
            return state;
    }
}

export default TypesReducer;
