const initialState = {
    data: [],
    error: '',
}

const CarouselReducer = (state = initialState , action) => {
    switch (action.type){
        case "REQUEST_CAROUSEL" :
            return state;
        case "SUCCESS_CAROUSEL" :
            return {
                data: action.payload,
                error: ''
            }
        case "ERROR_CAROUSEL" :
            return {
                data: [],
                error: action.payload,
            }
        default :
            return state;
    }
}

export default CarouselReducer;
