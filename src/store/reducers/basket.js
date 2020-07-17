import * as Types from '../types/basket'
import cloneDeep from 'lodash.clonedeep'
import { printLog, sumArray } from '../../resources/helpers'

const init_state = {
  totalPrice: 0,
  products: []
}

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case Types.SET_BASKET: {
      printLog(action)
      let newState = cloneDeep(state)
      newState[action.payload.prop] = action.payload.val
      return newState
    }

    case Types.ADD_PRODUCT_TO_BASKET: {
      printLog(action)
      let newState = cloneDeep(state)
      newState.products = [
        ...newState.products,
        action.payload
      ]

      newState.totalPrice = sumArray(newState.products.map(p => p.price))
      return newState
    }

    case Types.REMOVE_PRODUCT_FROM_BASKET: {
      printLog(action)
      let newState = cloneDeep(state)

      console.log('newState.products: ', newState.products)
      console.log('action.payload: ', JSON.stringify(action.payload))

      const foundIndex = newState.products.map(p => p.name).indexOf(action.payload.name)

      if (foundIndex !== -1) {
        newState.products.splice(foundIndex, 1)
      } else {
        console.warn('[BasketReducer] REMOVE_PRODUCT_FROM_BASKET: Unable to Find Product!')
      }

      newState.totalPrice = sumArray(newState.products.map(p => p.price))
      return newState
    }

    case Types.EMPTY_BASKET: {
      printLog(action)
      let newState = cloneDeep(init_state)
      return newState
    }

    default: {
      return state
    }
  }
}

export default reducer