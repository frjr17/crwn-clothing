// root-reducer

import { applyMiddleware, compose, legacy_createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-saga";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = []

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares)
)

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)