
const UseSumQuantity = (product) => {
    const sumPrice = product.reduce((value , item) => value + item.price_off , 0);
    const sumQuantity = product.reduce((value , item) => value + item.quantity , 0);
    return {
        sumPrice: sumPrice,
        sumQuantity: sumQuantity,
    }
};

export default UseSumQuantity;
