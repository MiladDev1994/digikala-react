
const Add = (product) => {
    return {
        type: 'ADD',
        payload: product,
    }
}

const Increase = (product) => {
    return {
        type: 'INCREASE',
        payload: product,
    }
}

const Decrease = (product) => {
    return {
        type: 'DECREASE',
        payload: product,
    }
}

const Remove = (product) => {
    return {
        type: 'REMOVE',
        payload: product,
    }
}

export {Add , Increase , Decrease , Remove};
