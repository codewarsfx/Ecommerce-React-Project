import React, { useReducer } from 'react'
import styled from 'styled-components'
import FormInput from './formInput'



const reducer= (state,action)=>{
    console.log(state)
    switch(action.type){
        case 'email':
            return {...state, email:action.payload}
            break
        case 'password':
            return { ...state,password:action.payload}
            break
        default:
            return state
    }

}

const SignIn=()=>{
    console.log('here')
    const InitialState= {email:'',password:''}
    const [state, dispatch]= useReducer(reducer, InitialState)

    const HandleInputChange=(e)=>{
        // @ts-ignore
        dispatch({type:`${e.target.name}`,
                  payload:e.target.value})
             }
    return(
        <Form>
            <FormInput handleChange= {HandleInputChange} type={"text"} value={state.email}  name = {'email'} label={"email"}/>
            <FormInput handleChange= {HandleInputChange} type={"password"} value={state.password}  name = {'password'} label={"password"}/>
        </Form>
       
    )
}



const Form = styled.form`

width:40vh;



`


export default SignIn