import { CATEGORIES_ACTION_TYPES } from "./types"

export const INIITAL_STATE = {
    categories: [],
}

export const categoriesReducer = (state = INIITAL_STATE, action = {}) => {
    switch (action.type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}