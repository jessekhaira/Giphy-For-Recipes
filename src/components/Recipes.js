import React from 'react';
import {connect} from 'react-redux';
import mapDispatchToPropsRecipes from '../React-Redux-maps/Recipes/mapDispatchToProps';
import mapStateToPropsRecipes from '../React-Redux-maps/Recipes/mapStateToProps';

import {makeNewGrid, addSpinnerDiv} from '../grid_utils/grid_utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
let count = 0; 
class Recipes extends React.Component{
    constructor(props) {
        super(props);
        // need local state for grid
        this._addWindowEventListener = this._addWindowEventListener.bind(this);
        this._windowEventListener = this._windowEventListener.bind(this);
        this._starIconClickHandler = this._starIconClickHandler.bind(this); 
        this.didInitStarHandler = 0; 
    }


    componentDidMount() {
        // Adding event listener to the window because we want to automatically go and 
        // get new data if we scroll past a certain point - infinite scrolling 
        // should be disabled for favourites route though 
        this._addWindowEventListener();
        // force window to always start at 0,0 on refresh to make sure all async activity
        // works properly 
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }

        // if no items stored in the state, fetch some and make first grid
        // if items are stored, then grab them all and display them in a grid 
        if (this.props.items.length === 0) {
            this.props.fetchRandomPosts();
        }

        if (!this.props.isFetching) {
            this._addGridsToGridHolder(); 
            [...document.getElementsByTagName('i')].forEach((starWrapper) => {
                starWrapper.addEventListener('click', this._starIconClickHandler);
            });
        }
    }
    _addAllGridsToGridHolder() {
        // needed when component is re-mounted when coming back from a different route 
        const gridHolder = document.getElementById('gridHolder');
        for (let grid of this.props.items) {
            gridHolder.appendChild(grid); 
        }
    }
    _addGridsToGridHolder() {
        const gridHolder = document.getElementById('gridHolder');
        gridHolder.appendChild(this.props.items[this.props.items.length-1]);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items.length !== this.props.items.length) {
            this._addGridsToGridHolder(); 
            // have to add the event listener the first time, the remainder we should not have to
            console.log(document.getElementsByTagName('i').length); 
            if (!this.didInitStarHandler) {
                [...document.getElementsByTagName('i')].forEach((starWrapper) => {
                    starWrapper.addEventListener('click', this._starIconClickHandler);
                });
                this.didInitStarHandler = 1; 
            }
        }
    }

    componentWillUnmount() {
        [...document.getElementsByTagName('i')].forEach((starWrapper) => {
            starWrapper.removeEventListener('click', this._starIconClickHandler);
        }) 
    }

    _starIconClickHandler(e) {
        let iconStar = e.target;
        // if the user clicks directly on star, the e will be the icon and not the wrapper, which is
        // what we want it to be
        const potentialPost = e.target.closest('.gridCell'); 
        // we will check if the post is already in the favourites
        // if it is, then that means we are removing this from the favourites, not adding it
        // and the star icon should go from filled to unfilled. Otherwise, if the post is not
        // in the favourites, then that means star icon goes from unfilled to filled and gets added
        // to the favourites 
        // if the user clicks directly on star, the e will be the icon and not the wrapper, which is
        // what we want it to be
        if (this.props.favourites.has(potentialPost)) {
            this.props.removeFromFavourites(potentialPost); 
            iconStar.className = 'far fa-star '
        }
        else {
            this.props.addToFavourites(potentialPost); 
            iconStar.className = 'fas fa-star '
        }
    }


    _addWindowEventListener() {
        window.addEventListener('scroll',this._windowEventListener);
    }

    _windowEventListener() {
        // account for different routes - /favourites doesn't have infinite scrolling
        // account for fact we could be fetching data right now 
        if (document.getElementById('gridHolder') === null || this.props.isFetching) {
            return; 
        }
        const gridHolder = document.getElementById('gridHolder');
        const lastGrid = gridHolder.children[gridHolder.children.length-1];
        let totalHeight = 0; 
        let equalityNum = 10; 
        if (
            window.innerHeight + document.documentElement.scrollTop +1
            >= document.documentElement.offsetHeight
          ) {
            this.props.fetchRandomPosts(); 
          }
    }

    render() {
        return(
            <div id = "recipe_holder">
                <div id = "gridHolder">
                </div>
            </div>
        )
    }
}

export default Recipes; 