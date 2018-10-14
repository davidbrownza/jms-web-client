import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducer';
import apiMiddleware from './auth/middleware';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        apiMiddleware,
        loggerMiddleware
    )
);