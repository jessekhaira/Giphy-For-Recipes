export default function addToFavouritesReducer(state, action) {
    let returnObj = {};
    // copy old state to new state in a pure fashionn
    // going to have to add back event listener for click events to these dom nodes 
    for (const [key, domNode] of Object.entries(state)) {
        returnObj[key] = domNode.cloneNode();
    }
    // add new post object to the new state 
    returnObj[action.post.id] = action.post; 
    return returnObj; 
}
