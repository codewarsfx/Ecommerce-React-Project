import React from 'react'
import styled from 'styled-components'
import CustomButton from './button'



const CartDropdown =()=>{
    
 return(
     
    <Wrapper>
        <div className="cart-items"/>
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

export default CartDropdown