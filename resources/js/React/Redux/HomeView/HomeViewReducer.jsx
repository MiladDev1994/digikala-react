const initialState = {
    data: [],
    error: '',
}

const HomeViewReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_HOMEVIEW" :
            return state;
        case "SUCCESS_HOMEVIEW" :
            return {
                data: action.payload,
                error: ''
            }
        case "ERROR_HOMEVIEW" :
            return {
                data: [],
                error: action.payload,
            }
        default :
            return state;
    }
}

export default HomeViewReducer;
