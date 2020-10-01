import {homePageReducer} from '../../Redux/reducers/homePageReducer';
import {REQUEST_POSTS, RECIEVE_POSTS} from '../../Redux/reduxUtility';
import recievePosts from '../../Redux/action creators/recievePosts';
import requestPosts from '../../Redux/action creators/requestPosts';


describe('Testing home page reducers', () => {
    test('Test requesting posts reducer', () => {
        const requestPostsAction = requestPosts();
        let d1 = document.createElement('div');
        let d2 = document.createElement('div');
        const INIT_STATE = {
            isFetching: false,
            lastUpdated: null,
            items: [d1, d2] 
        }; 

        const expected_output = {
            isFetching: true,
            lastUpdated: null,
            items: [d1, d2] 
        };


        expect(expected_output).toEqual(homePageReducer(INIT_STATE, requestPostsAction));
    });



    test('Recieving Posts Reducer', () => {
        const data = [];
        for (let i=0;i<10; i++) {
            data.push({'t1':'t1'}); 
        }
        const actionObj = recievePosts(data);
        const INIT_STATE = {
            isFetching: false,
            lastUpdated: null,
            items: []
        };   
    
        const expected_output = {
            isFetching: false,
            lastUpdated: Date.now(),
            items: data
        };

        console.log(expected_output.items.length);

        const output_state = homePageReducer(INIT_STATE,actionObj);

        expect(output_state.isFetching).toEqual(expected_output.isFetching);
        expect(output_state.lastUpdated).toEqual(expected_output.lastUpdated);
        expect(output_state.items.length).toEqual(expected_output.items.length);
        expect(output_state.items[0]).toEqual(expected_output.items[0]);

    })
})