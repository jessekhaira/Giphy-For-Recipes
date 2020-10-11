import requestSearchPosts from './requestSearchPosts';
import recieveSearchPosts from './recieveSearchPosts';
import fetchSearch from '../../api_utils/fetchSearch';


export default function(text) {
    return function(dispatch) {
        dispatch(requestSearchPosts()); 
        fetchSearch(text).then(data => dispatch(recieveSearchPosts(data))); 
    }
}