import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import CustomButton from './button'
import CartItem from './cart-item'
import {cartItemsSelect} from '../redux/cart/cart.selectors'
import {toggleCart} from '../redux/cart/cart.actions'



const CartDropdown =({items,history,dispatch})=>{
 return(
     
    <Wrapper>
        <div className="cart-items">
          {
            items.length > 0 ? items.map(item => <CartItem key={item.id} item= {item}/>) :(
              <span className='dropdown-empty'>No Item Added Yet </span>
            )
          }
        </div>
        <CustomButton onClick={()=>{
          history.push('/checkout')
          dispatch(toggleCart())
      }}>Check Out </CustomButton>
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
    overflow: scroll;
    flex-direction: column;
    .dropdown-empty{
     align-self:center;
    }
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

export default withRouter(connect(mapStatetoProps)(CartDropdown))