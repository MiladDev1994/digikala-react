const initialState = {
    data: [],
    error: '',
}

const BrandsReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_BRANDS" :
            return state;
        case "SUCCESS_BRANDS" :
            return {
                data: action.payload,
                error: ''
            }
        case "ERROR_BRANDS" :
            return {
                data: [],
                error: action.payload,
            }
        default :
            return state;
    }
}

export default BrandsReducer;
