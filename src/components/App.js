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
import {addHoverToLinks} from '../grid_utils/grid_utils';


/**
 * This is the primary component for the application, which wraps all the individual children
 * components and contains the logic for the routing. This component is connected with the redux store
 * and passes down action creators and state from the redux store into children components through props.
 * 
 * @class @public
 */
class App extends React.Component{
  constructor(props) {
    super(props);

    this._starIconClickHandler = this._starIconClickHandler.bind(this); 
    this._updateStarStatus = this._updateStarStatus.bind(this); 
  }


  /**
   * Method that will be passed down as a prop into multiple wrapped components. Purpose of method is to
   * render the correctversion of a star within the component, related to whether the grid cell is 
   * favourited or not. 
   * @param {HTMLElement} gridHolder Dom Node that holds all of the grid cells for the current component. 
   */
  _updateStarStatus(gridHolder) {
    for (let grid of gridHolder.children) {
        for (let gridCell of grid.children) {
            let iconObj = gridCell.querySelectorAll('i')[0]; 
            const postId = gridCell.classList[gridCell.classList.length-1];
            if (!this.props.favourites.has(postId)) {
                iconObj.className = 'far fa-star';
            }
            else {
                iconObj.className = 'fas fa-star';
            }
        }
    }
  }

  addHoverToAllAnchorLinks() {
    [...document.querySelectorAll('.gridCell')].forEach((obj) => {
        const anchorLinks = obj.querySelectorAll('a');
        for (const link of anchorLinks) {
            addHoverToLinks(link); 
        }
    });
  }

  _starIconClickHandler(e) {
    let iconStar = e.target;
    // if the user clicks directly on star, the e will be the icon and not the wrapper, which is
    // what we want it to be. Cloning this to keep everything bug-free
    let gridCell = e.target.closest('.gridCell');
    const potentialPost = gridCell.cloneNode(true); 
    // we will check if the post is already in the favourites if it is,
    // then that means we are removing this from the favourites
    // and the star icon should go from filled to unfilled. Otherwise, if the post is not
    // in the favourites, then that means star icon goes from unfilled to filled and gets added
    // to the favourites if the user clicks directly on star, the e will be the icon and not 
    //the wrapper, which is what we want it to be
    const gridCellsStarsAddOrRemove = gridCell.classList[gridCell.classList.length-1];
    if (this.props.favourites.has(gridCellsStarsAddOrRemove)) {
        this.props.removeFromFavourites(potentialPost); 
        // since there can be multiple elements with the same id (ie we can have repeats of the same item)
        // get every single item with this id and remove the star from each of them 
        [...document.getElementsByClassName(gridCellsStarsAddOrRemove)].forEach((obj) => {
          const objStarIcon = obj.querySelectorAll('i')[0];
          objStarIcon.className = 'far fa-star';
        })
    }
    else {
        this.props.addToFavourites(potentialPost); 
        [...document.getElementsByClassName(gridCellsStarsAddOrRemove)].forEach((obj) => {
          const objStarIcon = obj.querySelectorAll('i')[0];
          objStarIcon.className = 'fas fa-star';
        })
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

                    <Favourites 
                    {...props} 
                    favourites = {this.props.favourites} 
                    addToFavourites = {this.props.addToFavourites} 
                    removeFromFavourites = {this.props.removeFromFavourites}
                    _starIconClickHandler = {this._starIconClickHandler}
                    addHoverToAllAnchorLinks = {this.addHoverToAllAnchorLinks}
                    /> 
                  </div>
                )}></Route>

              <Route
              path="/"
              render={(props) => (
                <div>
                  <NavBar />
                  <div id = "spacing_div"></div>

                  <SearchBar 
                  {...props} 
                  showingSearch = {this.props.showingSearch}
                  searchForRecipe = {this.props.searchForRecipe}
                  removeSearchResults = {this.props.removeSearchResults} 
                  addToFavourites = {this.props.addToFavourites}
                  removeFromFavourites = {this.props.removeFromFavourites}
                  favourites = {this.props.favourites} 
                  _starIconClickHandler = {this._starIconClickHandler}
                  _updateStarStatus = {this._updateStarStatus}
                  addHoverToAllAnchorLinks = {this.addHoverToAllAnchorLinks}
                  /> 

                  <Recipes 
                  {...props} 
                  items = {this.props.items} 
                  isFetching = {this.props.isFetching} 
                  favourites = {this.props.favourites} 
                  addToFavourites = {this.props.addToFavourites} 
                  removeFromFavourites = {this.props.removeFromFavourites}
                  fetchRandomPosts = {this.props.fetchRandomPosts}
                  _starIconClickHandler = {this._starIconClickHandler}
                  showingSearch = {this.props.showingSearch}
                  _updateStarStatus = {this._updateStarStatus}
                  addHoverToAllAnchorLinks = {this.addHoverToAllAnchorLinks} 
                  /> 

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
