const useQuantity = (state , id) => {
    let index = state.products.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.products[index].quantity
    }
}
export default useQuantity;
