const initialState = {
    data: [],
    error: '',
}

const BasketStartReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_BASKET_START" :
            return state;
        case "SUCCESS_BASKET_START" :
            return {
                data: action.payload,
                error: ''
            }
        case "ERROR_BASKET_START" :
            return {
                data: [],
                error: action.payload,
            }
        default :
            return state;
    }
}

export default BasketStartReducer;
