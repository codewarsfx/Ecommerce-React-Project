

import {Homepage,Shop, SignUpSignIn} from './pages'
import {createGlobalStyle} from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import { Header } from './components';


function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage }/>
      <Route exact path='/shop' component={Shop}/>
      <Route exact path='/signin' component={SignUpSignIn      }/>
      </Switch>
      <Global/>
    </div>
  );
}

const Global= createGlobalStyle`
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
