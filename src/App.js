
import {Homepage,Shop, SignUpSignIn} from './pages'
import {createGlobalStyle} from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import { Header,auth, createUserData } from './components';
import { useEffect } from 'react';
import {connect} from 'react-redux'
import {setUser} from './redux/redux.actions'


function App(props) {
  const {setUserData} = props
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
        <Route exact path='/signin' component={SignUpSignIn}/>
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

export default connect(null,mapDispatchToProps)(App);
