import {ADD_TO_FAVOURITES} from "../reduxConstants";

// Synchronous action creator - no api call here

export default function addToFavourites(post) {
    return {
        type: ADD_TO_FAVOURITES,
        post
    }
}