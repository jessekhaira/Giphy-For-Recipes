import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App'; 
import '../stylesheets/App.css'

const reduxStore = createStore(() => 'x');
function AppWrapper() {
  return (
      <Provider store = {reduxStore}>
          <App /> 
      </Provider>
  );
}

export default AppWrapper; 
