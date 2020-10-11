import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
        this._submitClickHandler = this._submitClickHandler.bind(this); 
    }

    componentDidMount() {
        document.getElementById('submit_search').addEventListener('click', this._submitClickHandler);
    }

    _submitClickHandler(e) {
        const searchedForText = document.getElementById('search_query').value; 
        // dispatch action to the redux store to update showingSearch to true, and fetch all the posts that 
        // match query in the api 
        this.props.searchForRecipe(searchedForText); 
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