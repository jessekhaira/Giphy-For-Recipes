import {REMOVE_FROM_FAVOURITES} from "../reduxConstants";

export default function removeFromFavourites(post) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        post
    }
}
