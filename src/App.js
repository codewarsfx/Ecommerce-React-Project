import { useEffect } from 'react';
import {connect} from 'react-redux'
import {createGlobalStyle} from 'styled-components'

import {Route, Switch,Redirect} from 'react-router-dom'





import {Homepage,Shop, SignUpSignIn,Checkout} from './pages'
import { Header,auth, createUserData } from './components';
import {setUser} from './redux/user/user.actions'
import {userAuthSelect} from './redux/user/user.selector'






function App(props) {
  const {setUserData,currentUser} = props
  useEffect(()=> {
    const unsuscribeFromAuth= auth.onAuthStateChanged( async (user)=>{
      if(user){
      const userRef= await createUserData(user);
      userRef.onSnapshot(snapshot=>{
          setUserData({
            currentID:user.uid,
            ...snapshot.data()
          }) 
      }) }  
    setUserData(user)
    return ()=>{
      unsuscribeFromAuth()
    }

  })},[])

  return (
    <div >
      
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage }/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/checkout' component={Checkout}/>
        <Route exact path='/signin' render={ ()=> currentUser? <Redirect to='/'/>: <SignUpSignIn/>}/>
      </Switch>
      <Global/>
    </div>
  );
}


const Global= createGlobalStyle`
:root{
  box-sizing:border-box;

}
*,*::after,*::before{
  box-sizing: inherit;
}
body{
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 20px 60px;
}

a{
  text-decoration:none;
  color:black;
}

`
const mapDispatchToProps = (dispatch)=>({
   setUserData:( user) => {
     dispatch(setUser(user))
   }
})

const mapStatetoProps = (state) => ({
   currentUser : userAuthSelect(state)
})

export default connect(mapStatetoProps,mapDispatchToProps)(App);
