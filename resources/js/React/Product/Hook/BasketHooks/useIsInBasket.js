
const UseIsInBasket = (product , id) => {
    let index = product.products.findIndex(item => item.id === id);
    if (index === -1){
        return false;
    }else {
        return true;
    }
};

export default UseIsInBasket;
