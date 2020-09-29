import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import ThunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';



const loggerMiddleware = createLogger(); 
export const reduxStore = createStore(rootReducer, 
    applyMiddleware(
        ThunkMiddleware,
        loggerMiddleware
    )
); 
