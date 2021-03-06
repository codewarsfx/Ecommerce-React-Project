import React, { useReducer } from 'react'
import styled from 'styled-components'
import CustomButton from './button'
import { auth, signInWithGoogle } from './firebase.utils'
import FormInput from './formInput'



const reducer= (state,action)=>{
    switch(action.type){
        case 'email':
            return {...state, email:action.payload}
            break
        case 'password':
            return { ...state,password:action.payload}
            break
        case 'submit':
            return {...state,password:'',email:''}
            break
        default:
            return state
    }

}

const SignIn=()=>{
    const InitialState= {email:'',password:''}
    const [state, dispatch]= useReducer(reducer, InitialState)

    const HandleInputChange=(e)=>{
        // @ts-ignore
        dispatch({type:`${e.target.name}`,
                  payload:e.target.value})
             }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        //@ts-ignore 
        const {email,password} = state
        try{
            await auth.signInWithEmailAndPassword(email,password);
             dispatch({type:"submit"})
        }
        catch(error){
            console.error('an error occured',error
            );
        }
       
    }

    return(
        <div>
        <h1>I already have an account</h1>
        <p>Sign in with your email and your password</p>
        <Form onSubmit={handleSubmit}>
            <FormInput handleChange= {HandleInputChange} type={"text"} value={state.email}  name = {'email'} label={"email"}/>
            <FormInput handleChange= {HandleInputChange} type={"password"} value={state.password}  name = {'password'} label={"password"}/>
            <div className='button'>
            <CustomButton isGoogleSignin={false}>Sign In</CustomButton>
            <CustomButton  onClick= {signInWithGoogle} isGoogleSignin>Sign In with Google</CustomButton>
            </div>
        </Form>
        </div>
    )
}



const Form = styled.form`

width:380px;

div{
    display:flex;
    justify-content :space-between;
}



`


export default SignIn