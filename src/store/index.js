// root-reducer

import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";


const loggerMiddleware = store => next => action => {
    if (!action.type) {
        return next(action)
    }

    console.log('type', action.type)
    console.log('payload', action.payload)
    console.log('currentState', store.getState())

    next(action);
    console.log('nextState', store.getState())
}

const middlewares = [logger]
const composedEnhancers = applyMiddleware(...middlewares)

export const store = legacy_createStore(rootReducer, undefined, composedEnhancers)
