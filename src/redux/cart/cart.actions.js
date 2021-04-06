import {cartTypes} from './cart.types'

export const toggleCart = ()=>({  
    type: cartTypes.toggleVisibility  
})


export const addToCart = (item)=>({
    type: cartTypes.addToCart,
    payload: item
})