export const organiseCart = (cartItems, addedItem) => {
    const isPresentInCart = cartItems.find(item => item.id === addedItem.id)

    if(isPresentInCart){ 
     return cartItems.map ( item => (
            item.id === addedItem.id ? {...item, quantity: item.quantity + 1} : item
        ))
    }
     
     return [...cartItems, {...addedItem, quantity: 1}]
    
     
}