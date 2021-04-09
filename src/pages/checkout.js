import React from 'react';
import styled from 'styled-components'
import {createStructuredSelector} from 'reselect'
import {connect } from 'react-redux'


import {cartItemsTotalSelect,cartItemsSelect} from '../redux/cart/cart.selectors'
import CheckoutItem from '../components/checkoutItem'



const Checkout = ({total,items})=>{
    return (
        <Wrapper>
            <div className='checkout-header'>
                    <span className='header-block'>Product</span>
                    <span className='header-block'>Description</span>
                    <span className='header-block'>Quantity</span>
                    <span className='header-block'>Price</span>
                    <span className='header-block'>Remove</span>      
            </div>
            {
                items.map(item=><CheckoutItem key={item.id} item={item}/>)
            }
            <span className='total'>TOTAL: ${total}</span>
        </Wrapper>
        
    )
}



const Wrapper = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

`

const mapStateToProps = createStructuredSelector({
    total: cartItemsTotalSelect,
    items: cartItemsSelect
})

export default  connect(mapStateToProps)(Checkout)