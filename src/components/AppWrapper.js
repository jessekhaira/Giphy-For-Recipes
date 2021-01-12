import React from 'react';
import {Provider} from 'react-redux';
import {App} from './App'; 
import {reduxStore} from '../Redux/store';
import '../stylesheets/App.css';


/**
 * This function serves as a wrapper for the app in order to provide the redux store to
 * the application. 
 */
function AppWrapper() {
  return (
      <Provider store = {reduxStore}>
          <App /> 
      </Provider>
  );
}

export default AppWrapper; 
