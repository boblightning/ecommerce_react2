import { combineReducers } from 'redux';
import { userReducer } from './userReducer'
import { productsReducer } from './productsReducer'
import { productReducer } from './productReducers';

export const rootReducers = combineReducers({
    userReducer,
    productsReducer,
    productReducer
})