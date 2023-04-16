const initialState = {
    data: [],
    error: '',
}

const categoryReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST" :
            return state;
        case "SUCCESS" :
            return {
                data: action.payload,
                error: '',
            }
        case "ERROR" :
            return {
                data: [],
                error: action.payload
            }
        default :
            return state;
    }
}


export default categoryReducer;
