
import './App.css';
import {Homepage} from './pages'
import {createGlobalStyle} from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import Hat from './pages/hatsPage';

function App() {
  return (
    <div >
      <Global/>
      <Switch>
      <Route exact path='/' component={Homepage }/>
      <Route exact path='/hats' component={Hat}/>
      </Switch>
    </div>
  );
}

const Global= createGlobalStyle`
body{
  font-family: 'Open Sans Condensed', sans-serif;
}

`


export default App;
