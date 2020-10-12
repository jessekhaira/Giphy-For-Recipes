import requestPosts from './requestPosts';
import recievePosts from './recievePosts';
import fetchRandom from '../../api_utils/fetchRandom';
import {reduxStore} from '../store'; 
import {addSpinnerDiv} from '../../grid_utils/grid_utils';

// thunk action creator
// needed as we are making call to api to fetch data 
export default function fetchRandomPosts() {
    // instead of returning action object, return a function that takes
    // dispatch as an argument. Thunk middleware is used in the Redux 
    // store to handle these thunks
    return function(dispatch) {
        // if we're already in the midst of a call, dont dispatch another call to api to get data
        addSpinnerDiv(); 
        if (reduxStore.getState().homePage.isFetching) {
            return; 
        }
        dispatch(requestPosts());
        // make 9 calls to get 9 recipes 
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
        ]).then(data => {
            dispatch(recievePosts(data));
        }); 
    }
}

