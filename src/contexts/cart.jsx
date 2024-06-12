import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems([...addCartItem(cartItems, productToAdd)])
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems([...removeCartItem(productToRemove, cartItems)])
    }

    const clearItemFromCart = (productToRemove) => {
        setCartItems([...clearCartItem(productToRemove, cartItems)])
    }
    return (
        <CartContext.Provider value={{ cartTotal, clearItemFromCart, removeItemFromCart, cartCount, isCartOpen, cartItems, setIsCartOpen, addItemToCart }}>
            {children}
        </CartContext.Provider>
    )
}