import requestPosts from './requestPosts';
import recieveSearchPosts from './recieveSearchPosts';
import fetchSearch from '../../api_utils/fetchSearch';


export default function(text) {
    return function(dispatch) {
        fetchSearch(text).then(data => console.log(data));
    }
}