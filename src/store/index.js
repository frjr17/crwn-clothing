// root-reducer

import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [logger]
const composedEnhancers = applyMiddleware(...middlewares)

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)