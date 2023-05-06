import axios from "axios";

const initialBasket = {products: [], active: false}

const testHandler = async (product , action) => {

    const response = await axios.post('/api/basket/insert' , {
        variety_id: product.id,
        product_id: product.product[0].id,
        quantity: 1,
        price: product.price,
        price_off: product.price_off,
        action: action,
        type: product.type.id,
    })
    return {
        products: response.data,
        active: true,
    };
}

const BasketReducer = (state = initialBasket , action) => {

    switch (action.type){
        case 'ADD' :
            return  testHandler(action.payload , 'ADD');

        case 'INCREASE' :
            return  testHandler(action.payload , 'INCREASE');

        case 'DECREASE' :
            return  testHandler(action.payload , 'DECREASE');

        case "REMOVE" :
            return  testHandler(action.payload , 'REMOVE');

        default : return state;
    }
}

export default BasketReducer;
