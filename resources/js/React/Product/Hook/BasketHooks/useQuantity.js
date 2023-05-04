const useQuantity = (state , id) => {
    let index = state.findIndex(item => item.variety_id === id)
    if (index === -1) {
        return false
    } else {
        return state[index].quantity
    }
}
export default useQuantity;
