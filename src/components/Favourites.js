import React from 'react';
import {connect} from 'react-redux';

class Favourites extends React.Component {
   constructor(props) {
       super(props);
   }

   componentDidMount() {
       this._addFavouritedGridCellsToGrid();
   }

   _addFavouritedGridCellsToGrid() {
       // 9 grid cells per grid 
       let grid = document.createElement('div');
       grid.className = 'grid'; 
       let favouritesHolder = document.getElementById('favouritesHolder');
       let i = 0;
       for (let gridCell of this.props.favourites) {
           // every 9 grid cells we add the grid we just created
           // to the favourites holder, and then create a new grid and repeat
           // until finished with all of the favourites items 
           if (i > 0 && i%9 === 0) {
               favouritesHolder.appendChild(grid);
               grid = document.createElement('div');
               grid.className = 'grid';
           }
           grid.appendChild(gridCell[1]);  
           i++;
       }
       // whatever the last grid is, add it to the favourites holder if there are children
       // in it 
       if (grid.children.length > 0) {
           favouritesHolder.appendChild(grid); 
       }
   }
    
    render() {
        return(
            <div id = "favouritesHolder"></div>
        )
    }
}

export default Favourites;  