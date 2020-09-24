import React from 'react';

function SearchBar(props) {
    return(
        <div id = "search_bar">
            <label for = 'search'></label>
            <input type = "text" id = "search_query" name = "search" placeholder="Search for recipes..."></input>
            <button id = "submit_search">Search</button>
        </div>
    )
}

export default SearchBar; 