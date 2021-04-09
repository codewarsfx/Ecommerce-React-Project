import {cartTypes} from './cart.types'
import {organiseCart} from './cart.utils'

const initial_state = {
    hidden: true,
    items:[]
}




const cartReducer =  ( state = initial_state,action) =>{
    
    switch (action.type) {
        case cartTypes.toggleVisibility:
           return { 
               ...state,
               hidden: !state.hidden
           }  
        case cartTypes.addToCart:
            return {
                ...state,
                items: organiseCart(state.items,action.payload)
            }
        case cartTypes.removeFromCart:
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.payload.id)
            }
        default:
            return state
    } 
}

export default cartReducer


