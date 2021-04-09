import React  from 'react'
import {connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {createStructuredSelector} from 'reselect'



import logo  from '../assets/crown.svg'
import {auth} from './firebase.utils'
import CartIcon from './cart-icon/cart-icon.jsx'
import CartDropdown from './cart-dropdown'
import {userAuthSelect} from '../redux/user/user.selector'
import {cartHiddenSelect} from '../redux/cart/cart.selectors'



const Header =({currentUser,showDropdown})=>{
    return(
        <Wrapper>
            <Link className="logo-container" to ='/'>
                <img src={logo} alt='crown logo'/>
            </Link>
            <div className="options">
                <Link to='/shop' className="option">Shop</Link>
                <Link to='/shop' className="option">Contact</Link>{
                  currentUser ? <div className="option" onClick={()=>auth.signOut()}> SIGN OUT </div> :
                  <Link to='/signIn'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
              showDropdown? null : <CartDropdown/>
}

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

const mapStateToProps =createStructuredSelector({
  currentUser: userAuthSelect,
  showDropdown : cartHiddenSelect
})

export default connect(mapStateToProps)(Header)
