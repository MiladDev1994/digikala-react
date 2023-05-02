
const UseShowProduct = (product) => {
    let showProduct = {
        productTop : [],
        productDown : [],
    }

    product.length &&
        product.map((item , index) =>
            index === 0 ?
                showProduct.productTop.push(item)
                :
                !!showProduct.productTop.find(element => element.variety === item.variety) ?
                    showProduct.productDown.push(item)
                    :
                    showProduct.productTop.push(item)
        )

    return showProduct;
};

export default UseShowProduct;
