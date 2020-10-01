import fetchRandomPosts from '../../Redux/action creators/fetchRandomPosts';
import configureMockStore from 'redux-mock-store';
import {REQUEST_POSTS, RECIEVE_POSTS} from '../../Redux/reduxUtility';
import thunk from 'redux-thunk';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async action creators tests', () => {
    test('test action creator for fetching random posts', () => {
        const INIT_STATE = {
            isFetching: true,
            lastUpdated: null,
            items: [] 
        }; 

        const expectedActions = [
            { type: REQUEST_POSTS},
            { type: RECIEVE_POSTS, data: [{}, {}, {}], receivedAt: Date.now()}
        ];
        const store = mockStore(INIT_STATE);

        return store.dispatch(fetchRandomPosts()).then(() => {
            // return of async actions
            console.log(store.getActions()); 
            expect(expectedActions[0].type).toEqual(store.getActions()[0].type); 
            expect(expectedActions[1].type).toEqual(store.getActions()[1].type); 
        })    
    })
});



