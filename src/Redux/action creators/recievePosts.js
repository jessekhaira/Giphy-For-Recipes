import {RECIEVE_POSTS} from '../reduxUtility';


export default function recievePosts(data) {
    return {
        type: RECIEVE_POSTS, 
        data,
        receivedAt: Date.now() 
    }
}