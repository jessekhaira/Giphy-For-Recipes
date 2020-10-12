export default function removeFromFavouritesReducer(state, action) {
    let returnObj = new Map(); 
    // copy old state to new state in a pure fashionn
    for (const gridId of state.keys()) {
        returnObj.set(gridId, state.get(gridId).cloneNode(true)); 
    }
    // remove the deleted node from the object
    const postId = action.post.classList[action.post.classList.length-1]; 
    returnObj.delete(postId); 
    return returnObj; 
}

