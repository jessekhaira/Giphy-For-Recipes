// constant for spinner 
export const REQUEST_POSTS = "REQUEST_POSTS"; 

// constant for when data recieved from api
export const RECIEVE_POSTS = "RECIEVE_POSTS"; 

// starring post adds it to favourites
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

// removing post removes it from favourites
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"; 

// Init state & state constants 
export const HOME = "HOME";
export const FAVOURITES = "FAVOURITES";
export const FAVOURITES_HASH_SET = new Set();
export const ITEMS_HOME = []; 

export const INIT_STATE = {
    HOME: {
        isFetching: true,
        lastUpdated: null,
        items: ITEMS_HOME
    },

    FAVOURITES: {
        posts: FAVOURITES_HASH_SET
    }
}

