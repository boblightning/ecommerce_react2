import {combineReducers} from 'redux'
import { userReducer } from './userReducer'
import { productReducer } from './productReducers'

export const rootReducers = combineReducers({ 
    userReducer,
    productReducer
})