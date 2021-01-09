import React from 'react'
import { SignIn, SignUp } from '../components'
import styled from 'styled-components'


const SignUpSignIn= ()=>{
    return (
        <Wrapper>
            <SignIn/>
            <SignUp/>
        </Wrapper>
    
    )
}


const Wrapper = styled.div`
display:flex;
width:860px;
margin:30px auto;
justify-content:space-between;

`


export default SignUpSignIn