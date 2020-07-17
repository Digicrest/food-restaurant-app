import * as Types from '../types/basket'

export const setBasket = (prop, val) => {
    return {
        type: Types.SET_BASKET,
        payload: { prop, val }
    }
}

export const emptyBasket = () => {
    return {
        type: Types.EMPTY_BASKET,
    }
}

export const addProductToBasket = product => {
    return {
        type: Types.ADD_PRODUCT_TO_BASKET,
        payload: product
    }
}

export const removeProductFromBasket = product => {
    return {
        type: Types.REMOVE_PRODUCT_FROM_BASKET,
        payload: product
    }
}
