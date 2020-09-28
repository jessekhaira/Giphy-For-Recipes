import {REQUEST_POSTS} from '../reduxConstants';

export default function requestPosts() {
    return {
        type: REQUEST_POSTS,
        receivedAt: Date.now() 
    }
}
