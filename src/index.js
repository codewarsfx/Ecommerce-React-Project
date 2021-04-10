import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from   'react-router-dom'
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'



ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
        <Router>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        </Router>
  </React.StrictMode>
   </Provider>,
  document.getElementById('root')
);

