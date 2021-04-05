import React from 'react';
import {ReactComponent as Cart} from '../../assets/shopping-bag.svg'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.actions'


const CartIcon = ({toggleDropdownVisibility})=> {
    
return (
    
    <Wrapper onClick={toggleDropdownVisibility}>
        <Cart className='shopping-icon' />
        <span className='item-count'>0</span>
    </Wrapper>    
) 
}


const Wrapper = styled.div`
 
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  
}
`

const mapDispatchToProps = dispatch => ({
  toggleDropdownVisibility: ()=>{  
    dispatch(toggleCart()) 
  }
})

export default connect(null,mapDispatchToProps)(CartIcon)