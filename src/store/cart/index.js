import { CART_ACTION_TYPES } from "./types"

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}


export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART:
            return { ...state, isCartOpen: action.payload }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload,
            }
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartCount: action.payload,
            }
        case CART_ACTION_TYPES.SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: action.payload,
            }
        default:
            return state
    }
}