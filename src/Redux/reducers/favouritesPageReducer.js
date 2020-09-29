import {createReducer, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from '../reduxUtility';
import addToFavourites from './favouritesUtilityFunctions/addToFavourites';
import removeFromFavourites from './favouritesUtilityFunctions/removeFromFavourites';


// Object contains mapping from action types to handler functions which return new state objects in response
// to actions. Removes the need for many switch/case statements when used in conjuction with createReducer
const map_actionType_function = {
    ADD_TO_FAVOURITES: addToFavourites,
    REMOVE_FROM_FAVOURITES: removeFromFavourites
};

// only state contained here is the hash set which contains all the posts that should appear on this page
const FAVOURITES_HASH_SET = new Set();

export const favouritesPageReducer = createReducer(FAVOURITES_HASH_SET, map_actionType_function);


