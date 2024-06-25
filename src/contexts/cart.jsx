import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../utils/reducer";

export const CartContext = createContext({
    isCartOpen: false,
    toggleCart: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
})

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItemToRemove, cartItems) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const clearCartItem = (cartItemToRemove, cartItems) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const CART_ACTION_TYPES = {
    TOGGLE_CART: 'TOGGLE_CART',
    SET_CART_ITEMS: 'SET_CART_ITEMS'

}

const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART:
            return { ...state, isCartOpen: action.payload }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return { ...state, ...action.payload }
        default:
            throw new Error(`Unhandled type of ${action.type} in cartReducer`)
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const { isCartOpen, cartItems, cartCount, cartTotal } = state

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal }))
        return
    }

    const toggleCart = () => {
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART, !isCartOpen))
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(productToRemove, cartItems);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (productToRemove) => {
        const newCartItems = clearCartItem(productToRemove, cartItems);
        updateCartItemsReducer(newCartItems);
    }

    return (
        <CartContext.Provider value={{ cartTotal, clearItemFromCart, removeItemFromCart, cartCount, isCartOpen, cartItems, toggleCart, addItemToCart }}>
            {children}
        </CartContext.Provider>
    )
}