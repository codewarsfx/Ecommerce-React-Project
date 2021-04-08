import {createSelector} from 'reselect'


const cartSelect = state => state.cart;

export const cartItemsSelect = createSelector([cartSelect],(cart)=> cart.items)

export const cartItemCountSelect = createSelector([cartItemsSelect],(cartItems)=>{
    return cartItems.reduce((accumulator,nextItem)=>accumulator + nextItem.quantity ,0)
})

