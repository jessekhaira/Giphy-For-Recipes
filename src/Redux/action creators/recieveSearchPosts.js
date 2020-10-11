import {RECIEVE_SEARCH_POSTS} from '../reduxUtility';

export default function(posts) {
    return {
        type: RECIEVE_SEARCH_POSTS,
        posts 
    }
}

