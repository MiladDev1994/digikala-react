const initialState = {
    data: [],
    error: '',
}

const ArticlesReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_ARTICLE" :
            return state;
        case "SUCCESS_ARTICLE" :
            return {
                data: action.payload,
                error: ''
            }
        case "ERROR_ARTICLE" :
            return {
                data: [],
                error: action.payload,
            }
        default :
            return state;
    }
}

export default ArticlesReducer;
