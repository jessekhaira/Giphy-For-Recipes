export default function recievePostsReducer(state, action) {
    let newItems = [];
    for (const obj of state.items) {
        newItems.push(JSON.parse(JSON.stringify(obj))); 
    }

    for (const obj of action.data) {
        newItems.push(obj); 
    }

    return Object.assign({}, 
        {isFetching: false, lastUpdated: action.receivedAt, items: newItems}
    );
}

