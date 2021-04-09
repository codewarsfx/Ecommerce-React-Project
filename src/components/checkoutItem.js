import React from 'react';
import {connect} from'react-redux'
import styled from 'styled-components'
import {removeToCart} from '../redux/cart/cart.actions'

const CheckoutItem =({item,removeItem})=>{
    const {imageUrl,name,quantity,price} =item
    return (
        
        <Wrapper>
            <div className="image-container">
                <img src={imageUrl} alt='product'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button"  onClick={()=>removeItem(item)}> &#10006;</span>
        </Wrapper>
        
        
        
    )
}


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    padding-left: 20px;
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
}



`

const mapDispatchToProps = (dispatch)=>({
    removeItem :(item) =>{
        dispatch(removeToCart(item))
    }
})

export default connect(null,mapDispatchToProps)(CheckoutItem)