import {cartTypes} from './cart.types'

export const toggleCart = ()=>({  
    type: cartTypes.toggleVisibility  
})


export const addToCart = (item)=>({
    type: cartTypes.addToCart,
    payload: item
})

export const removeToCart = (item)=>({
    type: cartTypes.removeFromCart,
    payload: item
})


export const  reduceItem = (item)=>({
    type: cartTypes.reduceItem,
    payload: item
})