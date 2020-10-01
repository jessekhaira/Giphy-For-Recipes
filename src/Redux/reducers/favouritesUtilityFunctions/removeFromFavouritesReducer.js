export default function removeFromFavouritesReducer(state, action) {
    let returnObj = {};
    // copy old state to new state in a pure fashionn
    for (const [key, domNode] of Object.entries(state)) {
        returnObj[key] = domNode.cloneNode();
    }
    // remove the deleted node from the object 
    delete returnObj[action.post.id]
    return returnObj; 
}

