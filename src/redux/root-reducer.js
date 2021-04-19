import userReducer from './user/user.reducer.js'
import {combineReducers} from 'redux'
import cartReducer from './cart/cart-reducer'
import directoryReducer from './directory/directory.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    'key':'root',
    storage,
    'whitelist': ["cart"]
}



export const rootReducer=persistReducer(persistConfig,combineReducers({
    user:userReducer,
    cart: cartReducer,
    directory: directoryReducer
})) 
