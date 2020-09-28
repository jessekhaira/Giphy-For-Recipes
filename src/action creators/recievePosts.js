import {RECIEVE_POSTS} from '../reduxConstants';


export default function recievePosts(data) {
    return {
        type: RECIEVE_POSTS, 
        data,
        receivedAt: Date.now() 
    }
}