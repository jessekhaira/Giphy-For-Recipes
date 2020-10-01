import {createReducer, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from '../reduxUtility';
import addToFavouritesReducer from './favouritesUtilityFunctions/addToFavouritesReducer';
import removeFromFavouritesReducer from './favouritesUtilityFunctions/removeFromFavouritesReducer';


// Object contains mapping from action types to handler functions which return new state objects in response
// to actions. Removes the need for many switch/case statements when used in conjuction with createReducer
const map_actionType_function = {
    ADD_TO_FAVOURITES: addToFavouritesReducer,
    REMOVE_FROM_FAVOURITES: removeFromFavouritesReducer
};

// only state contained here is an object which will contain mappings between grid cell id's (strings) 
// and the grid cells themselves 
const INIT_FAVOURITES = {}; 

export const favouritesPageReducer = createReducer(INIT_FAVOURITES, map_actionType_function);


