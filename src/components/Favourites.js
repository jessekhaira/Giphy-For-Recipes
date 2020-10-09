import React from 'react';
import {connect} from 'react-redux';

class Favourites extends React.Component {
    /*Part of the redux state: hashset containing all the divs that have been favourited. 
•	Star -> add the div to the hashset 
•	Unstar -> remove the div from the hashset 
    Favourites component -> loop through hashset and fill out a div with 
    className == grid and let media queries take care of everyting with the elements 
    in the hash set. If the number favorited goes past 9, create a new grid. 

    */ 
   constructor(props) {
       super(props);
   }
    
    render() {
        return(
            <h1></h1>
        )
    }
}

export {Favourites}; 