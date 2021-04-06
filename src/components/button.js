import React from 'react'
import styled from 'styled-components'


const CustomButton = ({children,isGoogleSignin,inverted,...otherProps})=>{
    if(isGoogleSignin) {
        return(
           <GoogleButton {...otherProps}>{
               children
           }
           </GoogleButton>
        )
    }
    else if(inverted){
      return(<InvertedButton {...otherProps}>{
            children
        }</InvertedButton>)
    }
    return(
        <Button {...otherProps}>
            {children}
        </Button>
    )
}




const Button= styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;


  
}

`
 const GoogleButton= styled(Button)`
  background-color: #4285f4;
     color:white;
     &:hover{
         background-color:#357ae8;
         border:none;
         color:white;
     }
`

const InvertedButton = styled(Button)`
    position:absolute;
    top:73%;
    opacity:0.7;
    display:none;
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
     background-color: black;
     color: white;
     border: 1px solid black;
    }

`

export default CustomButton