

import { createContext, useEffect, useState } from "react";
import PRODUCTS from '../shop-data.json'


export const ProductContext = createContext({
    products: []
})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(PRODUCTS)
    }, [])
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}