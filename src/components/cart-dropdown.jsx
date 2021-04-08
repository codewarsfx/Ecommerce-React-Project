import React from 'react'
import styled from 'styled-components'
import CustomButton from './button'
import {connect} from 'react-redux'
import CartItem from './cart-item'
import {cartItemsSelect} from '../redux/cart/cart.selectors'



const CartDropdown =({items})=>{
 return(
     
    <Wrapper>
        <div className="cart-items">
          {
            items.map(item => <CartItem key={item.id} item= {item}/>)
          }
        </div>
        <CustomButton>Check Out </CustomButton>
    </Wrapper>
     
    
 )   
  
}


const Wrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  button {
    margin-top: auto;
  }

`

const mapStatetoProps= (state) => (
  {
    items: cartItemsSelect(state)
  }
)

export default connect(mapStatetoProps)(CartDropdown)