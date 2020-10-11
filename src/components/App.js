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

    this._starIconClickHandler = this._starIconClickHandler.bind(this); 
  }

  _starIconClickHandler(e) {
    let iconStar = e.target;
    // if the user clicks directly on star, the e will be the icon and not the wrapper, which is
    // what we want it to be. Cloning this to keep everything bug-free
    const potentialPost = e.target.closest('.gridCell').cloneNode(true); 
    // we will check if the post is already in the favourites if it is,
    // then that means we are removing this from the favourites
    // and the star icon should go from filled to unfilled. Otherwise, if the post is not
    // in the favourites, then that means star icon goes from unfilled to filled and gets added
    // to the favourites if the user clicks directly on star, the e will be the icon and not 
    //the wrapper, which is what we want it to be
    if (this.props.favourites.has(potentialPost.id)) {
        this.props.removeFromFavourites(potentialPost); 
        iconStar.className = 'far fa-star '
    }
    else {
        this.props.addToFavourites(potentialPost); 
        iconStar.className = 'fas fa-star '
    }
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
                    <Favourites {...props} 
                    favourites = {this.props.favourites} 
                    addToFavourites = {this.props.addToFavourites} 
                    removeFromFavourites = {this.props.removeFromFavourites}
                    _starIconClickHandler = {this._starIconClickHandler}/> 
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
                  fetchRandomPosts = {this.props.fetchRandomPosts}
                  _starIconClickHandler = {this._starIconClickHandler}
                  showingSearch = {this.props.showingSearch}/> 
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
