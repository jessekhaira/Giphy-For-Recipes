import fetchRandomPosts from '../../Redux/action creators/fetchRandomPosts';

export default function (dispatch) {
    return {
        fetchRandomPosts: () => dispatch(fetchRandomPosts())
    }
}
