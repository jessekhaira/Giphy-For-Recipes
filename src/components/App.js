import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Recipes from './Recipes';
import SearchBar from './SearchBar';
import '../stylesheets/App.css'

class App extends React.Component{
  render() {
    return(
      <div>
        <NavBar />
        <SearchBar /> 
        <Recipes /> 
      </div>
    )
  }
}

export default App;
