import userReducer from './user/user.reducer.jsx'
import {combineReducers} from 'redux'


export const rootReducer= combineReducers({
    user:userReducer
})