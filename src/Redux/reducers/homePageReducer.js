import {createReducer} from '../reduxUtility';
import {RECIEVE_POSTS, REQUEST_POSTS, REQUEST_SEARCH_POSTS, RECIEVE_SEARCH_POSTS, REMOVE_SEARCH_RESULTS} from '../reduxUtility';
import recievePostsReducer from './homePageUtilityFunctions/recievePostsReducer';
import requestPostsReducer from './homePageUtilityFunctions/requestPostsReducer';
import requestSearchPostsReducer from './homePageUtilityFunctions/requestSearchPostsReducer';
import recieveSearchPostsReducer from './homePageUtilityFunctions/recieveSearchPostsReducer';
import removeSearchResultsReducer from './homePageUtilityFunctions/removeSearchResultsReducer';

const INIT_STATE = {
    isFetching: true,
    lastUpdated: null,
    items: [],
    showingSearch: false 
}; 

// Object contains mapping from action types to handler functions which return new state objects in response
// to actions. Removes the need for many switch/case statements when used in conjuction with createReducer
const map_actionType_toFunctions = {
    RECIEVE_POSTS: recievePostsReducer,
    REQUEST_POSTS: requestPostsReducer,
    REQUEST_SEARCH_POSTS: requestSearchPostsReducer,
    RECIEVE_SEARCH_POSTS: recieveSearchPostsReducer,
    REMOVE_SEARCH_RESULTS: removeSearchResultsReducer
}

export const homePageReducer = createReducer(INIT_STATE, map_actionType_toFunctions); 
