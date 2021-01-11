import React from 'react';
import {Link} from "react-router-dom";
  

/**
 * This function represents a react functional component, which has the responsibility of 
 * rendering the NavBar for the website. 
 */
function NavBar(props) {
    return (
        <div id = "navbar_info">
            <h2>Recipe Paradise</h2>
            <div id = "routes">
                <Link to = "/" id = "Home">Home</Link>
                <Link to = "/favourites" id = "Favourites">Favourites</Link>
            </div>
        </div>
    )
}


export default NavBar; 