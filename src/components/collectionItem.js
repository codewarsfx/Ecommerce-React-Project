import React from 'react'
import styled from 'styled-components'
import CustomButton from './button'
import {connect} from 'react-redux'
import {addToCart} from '../redux/cart/cart.actions'

const CollectionItem= ({item,addItemToCart})=>{
  
  
  const {imageUrl,name,price} = item

    return(
         <Wrapper>
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
            </div> 
            <CustomButton className="inverted-button"  onClick={() => addItemToCart(item)} inverted> Add To Cart </CustomButton>
          </Wrapper>
        
    )
}


const Wrapper =styled.div`

  position:relative;
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
    &:hover{
        .image{
          opacity:0.8;
        }
      .inverted-button{
        display :block;
        opacity:0.85
      }
    }
  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
    

  }

`

const mapDispatchToProps = (dispatch)=>({
  addItemToCart: (item)=>{
      dispatch(addToCart(item))
  }
})


export default connect(null,mapDispatchToProps)(CollectionItem)



