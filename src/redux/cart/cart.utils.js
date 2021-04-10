export const organiseCart = (cartItems, addedItem) => {
    const isPresentInCart = cartItems.find(item => item.id === addedItem.id)

    if(isPresentInCart){ 
     return cartItems.map ( item => (
            item.id === addedItem.id ? {...item, quantity: item.quantity + 1} : item
        ))
    }
     
     return [...cartItems, {...addedItem, quantity: 1}]
    
     
}


export const reduceItems = (cartItems, addedItems)=>{
    
    const isItemPresent = cartItems.find(item => item.id === addedItems.id)
    
    if(isItemPresent.quantity === 1) {
        return cartItems.filter(item => item.id !== addedItems.id)
    }
    
    
    return cartItems.map(item =>item.id === addedItems.id? {...item,quantity:item.quantity-1}: item)
    
    
}