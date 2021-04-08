import React from 'react'
import styled from 'styled-components'



const CartItem = ({item:{imageUrl,price,quantity,name}})=>{
    
    console.log(imageUrl,price,quantity,name)
    
    return(
        <Wrapper>
            <img src={imageUrl} alt='cart item detail' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='name'>{quantity} * ${price}</span>
            </div>
        </Wrapper>
        
    )
}


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }



`

export default CartItem



