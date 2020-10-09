export default function removeFromFavouritesReducer(state, action) {
    let returnObj = new Map(); 
    // copy old state to new state in a pure fashionn
    for (const gridCell of state.keys()) {
        returnObj.set(gridCell, gridCell.cloneNode(true)); 
    }
    // remove the deleted node from the object 
    returnObj.delete(action.post); 
    return returnObj; 
}

