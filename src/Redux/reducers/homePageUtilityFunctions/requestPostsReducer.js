export default function requestPostsReducer(state, action) {
    return Object.assign({}, state, {isFetching:true});
}

