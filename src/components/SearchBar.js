import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react';


/**
 * This class represents a React component responsible for rendering the section of the UI displaying
 * the SearchBar. 
 * 
 * @class @public 
 */
class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
        this._submitClickHandler = this._submitClickHandler.bind(this); 
        this._backClickHandler = this._backClickHandler.bind(this); 
        this._unMountStarClickListener = this._unMountStarClickListener.bind(this);
    }

    componentDidMount() {
        document.getElementById('submit_search').addEventListener('click', this._submitClickHandler);
        document.getElementById('backOffSearch').addEventListener('click', this._backClickHandler);
    }

    componentDidUpdate(prevProps) {
        if (this.props.showingSearch) {
            const searchResultHolder = document.getElementById('searchResultHolder');
            for (const grid of searchResultHolder.children) {
                for (const gridCell of grid.children) {
                    const icon = gridCell.querySelectorAll('i')[0]; 
                    icon.addEventListener('click', this.props._starIconClickHandler);
                    // items can be starred already coming in from the homepage -- account for that  
                    this.props._updateStarStatus(document.getElementById('searchResultHolder'));
                }
            }
            this.props.addHoverToAllAnchorLinks(); 
        }
    }

    componentWillUnmount() {
        document.getElementById('submit_search').removeEventListener('click', this._submitClickHandler);
        document.getElementById('backOffSearch').removeEventListener('click', this._backClickHandler);
        // we can click to go from searched results to the favourites tab, therefore we need to make sure that
        // showing search is false 
        this.props.removeSearchResults(); 
        this._unMountStarClickListener(); 
    }

    _unMountStarClickListener() {
        if (this.props.showingSearch) {
            const searchResultHolder = document.getElementById('searchResultHolder');
            for (let grid of searchResultHolder.children) {
                for (let gridCell of grid.children) {
                    const iconElement = gridCell.querySelectorAll('i')[0];
                    iconElement.removeEventListener('click', this.props._starIconClickHandler);
                }
            }
        }
    }

    _backClickHandler(e) {
        document.getElementById('submit_search').addEventListener('click', this._submitClickHandler);
        this.props.removeSearchResults(); 
    }

    _submitClickHandler(e) {
        const searchedForText = document.getElementById('search_query').value;
        const passedInText = (searchedForText ? searchedForText: 'empty');
        // delete any nodes stored in searchHolder - complete refresh of element 
        document.getElementById('searchResultHolder').textContent = ''; 
        this.props.searchForRecipe(passedInText); 
        // after we've dispatched action, don't want to be able to keep clicking the search button and dispatching action over
        // and over again so disable event listener until back button is pressed
        document.getElementById('submit_search').removeEventListener('click', this._submitClickHandler);
    }

    render() {
        return(
            <div id = "search_bar">
                <div id = "mainSearch">
                    <label for = 'search'></label>
                    <input type = "text" id = "search_query" name = "search" placeholder="Search for recipes..."></input>
                    <button id = "submit_search">Search</button>
                </div>
                <button id = "backOffSearch">Go Back</button>
                <div id ="searchResultHolder"></div> 
            </div>
        )
    }
}

export default SearchBar; 