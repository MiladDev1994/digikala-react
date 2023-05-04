
const UseIsInBasket = (product , id) => {
    let index = product.findIndex(item => item.variety_id === id);
    if (index === -1){
        return false;
    }else {
        return true;
    }
};

export default UseIsInBasket;
