import React  from 'react'
import { Link } from 'react-router-dom'
import logo  from '../assets/crown.svg'
import styled from 'styled-components'
import {auth} from './firebase.utils'



const Header =({userData})=>{

    return(
        <Wrapper>
            <Link className="logo-container" to ='/'>
                <img src={logo} alt='crown logo'/>
            </Link>
            <div className="options">
                <Link to='/shop' className="option">Shop</Link>
                <Link to='/shop' className="option">Contact</Link>{
                  userData ? <div className="option" onClick={()=>auth.signOut()}> SIGN OUT </div> :
                  <Link to='/signIn'>SIGN IN</Link>
                }
            </div>

        </Wrapper>

    )
}


const Wrapper = styled.div`

  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  
}

`
export default Header