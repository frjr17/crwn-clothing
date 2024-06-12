

import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase";


export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getCategoriesAndDocuments()
            setCategoriesMap(response)
        }
        fetchProducts()
    }, [])

    return (
        <CategoriesContext.Provider value={{ categoriesMap }}>
            {children}
        </CategoriesContext.Provider>
    )
}