import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { }
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocumentFromAuth(user)

            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}