import {createSelector} from 'reselect'


const cartSelect = state => state.cart;

export const cartItemsSelect = createSelector([cartSelect],(cart)=> cart.items)

export const cartHiddenSelect = createSelector([cartSelect],(cart)=> cart.hidden)

export const cartItemCountSelect = createSelector([cartItemsSelect],(cartItems)=>{
    return cartItems.reduce((accumulator,nextItem)=>accumulator + nextItem.quantity ,0)
})


export const cartItemsTotalSelect = createSelector([cartItemsSelect],(items)=>{
    return items.reduce((accumulator,nextItem)=>{
        return accumulator + (nextItem.quantity * nextItem.price)
    },0)
})

