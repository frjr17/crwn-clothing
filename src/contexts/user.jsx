import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase";
import { createAction } from "../utils/reducer";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { }
})

export const USER_ACTION_TYPES = {
    SET_USER: 'SET_USER'
}


const userReducer = (state, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.SET_USER:
            return { ...state, currentUser: action.payload }
        default:
            return state
    }
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { currentUser: null })
    const { currentUser } = state

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_USER, user))
    }

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

