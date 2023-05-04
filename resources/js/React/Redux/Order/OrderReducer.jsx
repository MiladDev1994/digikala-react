const initialState = {
    data: [],
    error: '',
}

const OrderReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_ORDER" :
            return state;
        case "SUCCESS_ORDER" :
            return {
                data: action.payload,
                error: ''
            }
        case "ERROR_ORDER" :
            return {
                data: [],
                error: action.payload,
            }
        default :
            return state;
    }
}

export default OrderReducer;
