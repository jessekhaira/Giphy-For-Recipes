import {createReducer} from '../reduxUtility';
import {RECIEVE_POSTS, REQUEST_POSTS} from '../reduxUtility';
import recievePostsReducer from './homePageUtilityFunctions/recievePostsReducer';
import requestPostsReducer from './homePageUtilityFunctions/requestPostsReducer';

const INIT_STATE = {
    isFetching: true,
    lastUpdated: null,
    items: [] 
}; 

// Object contains mapping from action types to handler functions which return new state objects in response
// to actions. Removes the need for many switch/case statements when used in conjuction with createReducer
const map_actionType_toFunctions = {
    RECIEVE_POSTS: recievePostsReducer,
    REQUEST_POSTS: requestPostsReducer
}

export const homePageReducer = createReducer(INIT_STATE, map_actionType_toFunctions); 
