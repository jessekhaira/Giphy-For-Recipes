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
import mapStateToProps from '../React-Redux-maps/MainApp/mapStateToProps';
import mapDispatchToProps from '../React-Redux-maps/MainApp/mapDispatchToProps';


class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id = "App">
        <Router>
            <Switch>

              <Route path="/favourites">
                <NavBar />
                <div id = "spacing_div"></div>
                <Favourites favourited = {this.props.favourited} addToFavourites = {this.props.addToFavourites} removeFromFavourites = {this.props.removeFromFavourites}/>
              </Route>

              <Route path="/">
                <NavBar />
                <div id = "spacing_div"></div>
                <SearchBar /> 
                <Recipes favourited = {this.props.favourited} addToFavourites = {this.props.addToFavourites} removeFromFavourites = {this.props.removeFromFavourites}/> 
              </Route>

            </Switch>
        </Router>
      </div>
    )
  }
}

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App); 

export {connectedComponent as App}; 
