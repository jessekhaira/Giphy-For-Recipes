import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Recipes from './Recipes';
import SearchBar from './SearchBar';
import '../stylesheets/App.css'

class App extends React.Component{
  render() {
    return(
      <div id = "App">
        <NavBar />
        {/* Space div needed because nav bar position is fixed */}
        <div id = "spacing_div"></div>
        <SearchBar /> 
        <Recipes /> 
      </div>
    )
  }
}

export default App;
