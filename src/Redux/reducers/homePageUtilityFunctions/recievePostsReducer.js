import {makeNewGrid} from '../../../grid_utils/grid_utils';
import addApiInfoToGrid from './addApiInfoToGrid';
export default function recievePostsReducer(state, action) {
    const newItems = [];
    for (const grid of state.items) {
        newItems.push(grid.cloneNode(true)); 
    }
    const gridHolder = document.getElementById('gridHolder');
    // if we don't detect a gridHolder on the DOM, that means we can't carry through with the update
    // thus return the original state
    if (gridHolder == null) {
        return state; 
    }
    
    const newGridAdded = makeNewGrid(gridHolder.children.length);
    const newGridChildren = newGridAdded.children;
    for (let i=0; i<9; i++) {
        addApiInfoToGrid(action, newGridChildren, i); 
    }
    // Remove the spinner - if we get to this point, it is guaranteed to be the last
    // element in the grid holder 
    gridHolder.removeChild(gridHolder.lastChild);
    newItems.push(newGridAdded); 
    return Object.assign({}, 
        {isFetching: false, lastUpdated: action.receivedAt, items: newItems, showingSearch: false}
    );
}

