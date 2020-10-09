import React from 'react';
import {Provider} from 'react-redux';
import {App} from './App'; 
import {reduxStore} from '../Redux/store';
import '../stylesheets/App.css';


function AppWrapper() {
  return (
      <Provider store = {reduxStore}>
          <App /> 
      </Provider>
  );
}

export default AppWrapper; 
