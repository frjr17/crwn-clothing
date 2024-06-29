import { combineReducers } from "redux";
import { userReducer } from "./user";
import { categoriesReducer } from "./category";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
    // Add reducers here
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})