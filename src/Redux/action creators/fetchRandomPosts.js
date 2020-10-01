import requestPosts from './requestPosts';
import recievePosts from './recievePosts';
import fetchRandom from '../../api_utils/fetchRandom';

// thunk action creator
// needed as we are making call to api to fetch data 
export default function fetchRandomPosts() {
    // instead of returning action object, return a function that takes
    // dispatch as an argument. Thunk middleware is used in the Redux 
    // store to handle these thunks
    return function(dispatch) {
        
        // we want to show a spinner to indicate to user that the call has
        // begun - dispatch request posts action 
        dispatch(requestPosts());

        // make 9 calls to get 9 packets of data 
        return Promise.all([
            fetchRandom(),
            fetchRandom(), 
            fetchRandom(),

            fetchRandom(),
            fetchRandom(), 
            fetchRandom(),

            fetchRandom(),
            fetchRandom(), 
            fetchRandom(),
        ]).then(data => dispatch(recievePosts(data)))
    }
}

