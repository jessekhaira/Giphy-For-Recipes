import React from 'react';
import {connect} from 'react-redux';
import mapDispatchToPropsRecipes from '../React-Redux-maps/Recipes/mapDispatchToProps';
import mapStateToPropsRecipes from '../React-Redux-maps/Recipes/mapStateToProps';

import {makeNewGrid, addSpinnerDiv} from '../grid_utils/grid_utils';

class Recipes extends React.Component{
    constructor(props) {
        super(props);
        // need local state for grid
        this._addWindowEventListener = this._addWindowEventListener.bind(this);
        this._windowEventListener = this._windowEventListener.bind(this);
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
        // make the call to the api to fetch the data only if there are no items on the page currently
        // ie we have items cached, we don't need to get new ones if we go to favourites route and come back
        if (this.props.items.length === 0) {
            this.props.fetchRandomPosts();
        }

        if (!this.props.isFetching) {
            this._addGridsToGridHolder(); 
        }
    }

    _addGridsToGridHolder() {
        const gridHolder = document.getElementById('gridHolder');
        gridHolder.appendChild(this.props.items[this.props.items.length-1]);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items.length !== this.props.items.length) {
            this._addGridsToGridHolder(); 
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
        // Vals come from playing around on the browser and finding values
        // that'll make the equality work as expected (when user scrolls past the last grid cell
        // in the last grid, add new grid). Also need an if statement here to account for the fact
        // we have a media query so the totalHeight the user has to have scrolled is different
        // depending on width of the doc element 
        if (document.documentElement.clientWidth >= 1000) {
            totalHeight = lastGrid.scrollHeight+window.scrollY;
        }
        else if (document.documentElement.clientWidth < 1000) {
            totalHeight = lastGrid.scrollHeight+window.scrollY-1960;
        }
        if (Math.abs(totalHeight-document.documentElement.offsetHeight) <=equalityNum){
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

let connectedComponent = connect(mapStateToPropsRecipes, mapDispatchToPropsRecipes)(Recipes); 

export {connectedComponent as Recipes};  