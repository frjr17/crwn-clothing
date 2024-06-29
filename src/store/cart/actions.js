import { createAction } from "../../utils/reducer"
import { CART_ACTION_TYPES } from "./types"

export const setIsCartOpen = (isCartOpen) => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART, isCartOpen)
}

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

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(productToRemove, cartItems);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = clearCartItem(productToRemove, cartItems);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
