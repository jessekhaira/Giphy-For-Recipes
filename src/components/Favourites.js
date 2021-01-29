import React from 'react';
import {connect} from 'react-redux';

/**
 * This class represents a React Component responsible for rendering and handling the logic for the favourites
 * section of the UI. 
 * 
 * @class @public 
 */
class Favourites extends React.Component {
   constructor(props) {
       super(props);
   }

   componentDidMount() {
       // every time component is mounted, scroll the window to the beginning 
       window.scrollTo(0,0); 
       this._addFavouritedGridCellsToGrid();
       this.props.addHoverToAllAnchorLinks(); 
   }

   componentWillUnmount() {
        [...document.getElementsByTagName('i')].forEach((obj) => {
            obj.removeEventListener('click', this.props._starIconClickHandler);
        }) 
   }

   componentDidUpdate(prevProps) {
       if (this.props.favourites.size !== prevProps.favourites.size) {
           document.getElementById('favouritesHolder').textContent = '';  
           this._addFavouritedGridCellsToGrid(); 
           // add hover effect to all the anchor tags 
           this.props.addHoverToAllAnchorLinks(); 
       }
   }

   /**
    * This method represents a function responsible for adding recipes the user has favourited to the 
    * CSS grid contained in this component. The favourited grid cells are contained within the state
    * stored in the redux store, which this component recieves in the this.props object. 
    */
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
           gridCell[1].querySelectorAll('i')[0].className = 'fas fa-star'; 
           grid.appendChild(gridCell[1]);  
           i++;
       }
       // whatever the last grid is, add it to the favourites holder if there are children
       // in it 
       if (grid.children.length > 0) {
           favouritesHolder.appendChild(grid); 
       }
       [...document.getElementsByTagName('i')].forEach((obj) => {
        obj.addEventListener('click', this.props._starIconClickHandler);
        })
   }
    
    render() {
        return(
            <div id = "favouritesHolder"></div>
        )
    }
}

export default Favourites;  