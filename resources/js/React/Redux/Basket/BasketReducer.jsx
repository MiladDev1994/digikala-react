const initialBasket = {
    products : [],
    sumPrice: '',
    sumQuantity: '',
}

const BasketReducer = (state = initialBasket , action) => {
    switch (action.type){
        case 'ADD' :
            state.products.push({...action.payload , quantity: 1})
            return{
                ...state,
            }
        case 'INCREASE' :
            const indexAdd = state.products.findIndex(item => item.id === action.payload.id);
            state.products[indexAdd].quantity++;
            return {
                ...state
            }
        case 'DECREASE' :
            const indexDe = state.products.findIndex(item => item.id === action.payload.id);
            state.products[indexDe].quantity--;
            return {
                ...state
            }
        case "REMOVE" :
            const filter = state.products.filter(item => item.id !== action.payload.id);
            return {
                products: filter,
                sumPrice: '',
                sumQuantity: '',
            }
        default : return state;
    }
}

export default BasketReducer;
