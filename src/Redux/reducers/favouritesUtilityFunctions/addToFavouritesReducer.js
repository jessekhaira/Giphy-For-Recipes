export default function addToFavouritesReducer(state, action) {
    let returnObj = new Map(); 
    // copy old state to new state in a pure fashionn
    // going to have to add back event listener for click events to these dom nodes 
    for (const gridCell of state.keys()) {
        returnObj.set(gridCell, gridCell.cloneNode(true)); 
    }
    // add new post object to the new state 
    returnObj.set(action.post, action.post); 
    return returnObj; 
}
