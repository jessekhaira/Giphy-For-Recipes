import addToFavourites from '../../Redux/action creators/addToFavourites';
import removeFromFavourites from '../../Redux/action creators/removeFromFavourites';

export default function(dispatch) {
    return {
        addToFavourites: (post) => dispatch(addToFavourites(post)),
        removeFromFavourites: (post) => dispatch(removeFromFavourites(post))
    }
}