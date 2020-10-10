import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Recipes from './Recipes';
import SearchBar from './SearchBar';
import Favourites from './Favourites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../stylesheets/App.css'
import mapStateToProps from '../React-Redux-maps/mapStateToProps';
import mapDispatchToProps from '../React-Redux-maps/mapDispatchToProps';


class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id = "App">
        <Router>
            <Switch>
              <Route
                path="/favourites"
                render={(props) => (
                  <div>
                    <NavBar />
                    <div id = "spacing_div"></div>
                    <SearchBar /> 
                    <Favourites {...props} 
                    favourites = {this.props.favourites} 
                    addToFavourites = {this.props.addToFavourites} 
                    removeFromFavourites = {this.props.removeFromFavourites}/> 
                  </div>
                )}></Route>

              <Route
              path="/"
              render={(props) => (
                <div>
                  <NavBar />
                  <div id = "spacing_div"></div>
                  <SearchBar /> 
                  <Recipes {...props} 
                  items = {this.props.items} 
                  isFetching = {this.props.isFetching} 
                  favourites = {this.props.favourites} 
                  addToFavourites = {this.props.addToFavourites} 
                  removeFromFavourites = {this.props.removeFromFavourites}
                  fetchRandomPosts = {this.props.fetchRandomPosts}/> 
                </div>
              )}></Route>

            </Switch>
        </Router>
      </div>
    )
  }
}

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App); 

export {connectedComponent as App}; 
