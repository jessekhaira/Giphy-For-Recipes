import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
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