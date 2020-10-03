import {makeNewGrid} from '../../../grid_utils/grid_utils';
import addApiInfoToGrid from './addApiInfoToGrid';
export default function recievePostsReducer(state, action) {
    const newItems = [];
    for (const grid of state.items) {
        newItems.push(grid.cloneNode()); 
    }
    const newGridAdded = makeNewGrid();
    const newGridChildren = newGridAdded.children;
    for (let i=0; i<9; i++) {
        addApiInfoToGrid(action, newGridChildren, i); 
    }
    newItems.push(newGridAdded); 
    return Object.assign({}, 
        {isFetching: false, lastUpdated: action.receivedAt, items: newItems}
    );
}

