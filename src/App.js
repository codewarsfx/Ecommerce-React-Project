
import {Homepage,Shop, SignUpSignIn} from './pages'
import {createGlobalStyle} from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import { Header,auth, createUserData } from './components';
import { useEffect, useState } from 'react';


function App() {
  const [userData,setUserData] = useState(null)

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
      
      <Header userData={userData}/>
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


export default App;
