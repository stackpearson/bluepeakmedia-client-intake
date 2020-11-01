import {combineReducers} from 'redux';
import {shotReducer} from './shotReducer';
import {clientReducer} from './clientReducer';


export const rootReducer = combineReducers({
    shotReducer,
    clientReducer
});