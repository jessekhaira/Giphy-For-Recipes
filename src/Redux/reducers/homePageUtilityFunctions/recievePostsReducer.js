import {makeNewGrid} from '../../../grid_utils/grid_utils';
import addApiInfoToGrid from './addApiInfoToGrid';
export default function recievePostsReducer(state, action) {
    const newItems = [];
    for (const grid of state.items) {
        newItems.push(grid.cloneNode(true)); 
    }
    const newGridAdded = makeNewGrid();
    const newGridChildren = newGridAdded.children;
    for (let i=0; i<9; i++) {
        addApiInfoToGrid(action, newGridChildren, i); 
    }
    // Remove the spinner - if we get to this point, it is guaranteed to be the last
    // element in the grid holder 
    const gridHolder = document.getElementById('gridHolder');
    gridHolder.removeChild(gridHolder.lastChild);
    newItems.push(newGridAdded); 
    return Object.assign({}, 
        {isFetching: false, lastUpdated: action.receivedAt, items: newItems}
    );
}

