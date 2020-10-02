import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import {Recipes} from './Recipes';
import SearchBar from './SearchBar';
import {Favourites} from './Favourites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../stylesheets/App.css'

class App extends React.Component{
  render() {
    return(
      <div id = "App">
        <Router>
            <Switch>

              <Route path="/favourites">
                <NavBar />
                <div id = "spacing_div"></div>
                <Favourites />
              </Route>

              <Route path="/">
                <NavBar />
                <div id = "spacing_div"></div>
                <SearchBar /> 
                <Recipes /> 
              </Route>

            </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
