import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
        this._submitClickHandler = this._submitClickHandler.bind(this); 
        this._backClickHandler = this._backClickHandler.bind(this); 
    }

    componentDidMount() {
        document.getElementById('submit_search').addEventListener('click', this._submitClickHandler);
        document.getElementById('backOffSearch').addEventListener('click', this._backClickHandler);
    }

    componentWillUnmount() {
        document.getElementById('submit_search').removeEventListener('click', this._submitClickHandler);
        document.getElementById('backOffSearch').removeEventListener('click', this._backClickHandler);
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
            </div>
        )
    }
}

export default SearchBar; 