import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return(
            <div id = "search_bar">
                <label for = 'search'></label>
                <input type = "text" id = "search_query" name = "search" placeholder="Search for recipes..."></input>
                <button id = "submit_search">Search</button>
            </div>
        )
    }
}

export default SearchBar; 