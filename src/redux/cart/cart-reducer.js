import {cartTypes} from './cart.types'

const initial_state = {
    hidden: true
}


const cartReducer =  ( state = initial_state,action) =>{
    
    switch (action.type) {
        case cartTypes.toggleVisibility:
           return {
               ...state,
               hidden: !state.hidden
           }  
        default:
            return state
    } 
}


export default cartReducer


