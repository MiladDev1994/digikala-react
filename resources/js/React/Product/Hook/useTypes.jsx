
const useTypes = (product) => {
    let types = [];
    product.length &&
        product.map(item => !types.includes(item.type.color) && types.push(item.type.color))

    return types;
}

export default useTypes;
