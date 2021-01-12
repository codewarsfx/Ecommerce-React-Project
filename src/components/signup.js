import React, { useReducer } from 'react';
import styled from 'styled-components';
import CustomButton from './button'
import { auth, createUserData } from './firebase.utils';
import FormInput from './formInput'


const reducer = (state,action)=>{
    switch (action.type) {
        case 'name':
            return {...state, name: action.payload}
            break;
        case 'password':
            return { ...state,password: action.payload}
            break;
        case 'email':
            return { ...state,email: action.payload}
            break;
        case 'confirmPassword':
            return { ...state,confirmPassword: action.payload }
            break;
        case 'reset':
            return{
                name:'',email:'',password:'',confirmPassword:''
            }
            break
        default:
            return state
            break;
    }
}

const SignUp= ()=>{

    const [state, dispatch] = useReducer(reducer,{name:'',email:'',password:'',confirmPassword:''})

    const handleChange= (e)=>{
        dispatch({
            type : e.target.name,
            payload: e.target.value
        })

    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const {name,email,password,confirmPassword} = state;

        if(confirmPassword !== password){
            alert('paswword doesnt match please correct')
            return
        }


        try{

        const {user} = await auth.createUserWithEmailAndPassword(email,password)
            createUserData(user,{name})    
            dispatch({
                type:'reset'
            })
        }
        catch(error){
            console.error(error);
        }
    }
 
    const {name,password,email,confirmPassword } = state

    return(
        <Wrapper>
            <h1 className='title'>
                Sign Up
            </h1>
            <form onSubmit= {handleSubmit}>
                <FormInput name="name" type='text' required label='Name' value={name} handleChange={handleChange}/>
                <FormInput name="email" type='email' required label='Email' value={email} handleChange={handleChange}/>
                <FormInput name="password" type='password' required label='Password' value={password} handleChange={handleChange}/>
                <FormInput name="confirmPassword" type='password' required label='Confirm Password' value={confirmPassword} handleChange={handleChange}/>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </Wrapper>
    )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    margin: 10px 0;
  }

`

export default  SignUp