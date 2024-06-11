import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)

    return (
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
            {children}
        </CartContext.Provider>
    )
}