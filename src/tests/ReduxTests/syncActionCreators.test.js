import addToFavourites from '../../Redux/action creators/addToFavourites';
import removeFromFavourites from '../../Redux/action creators/removeFromFavourites';
import recievePosts from '../../Redux/action creators/recievePosts';
import requestPosts from '../../Redux/action creators/requestPosts';
import {REQUEST_POSTS, RECIEVE_POSTS, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from '../../Redux/reduxUtility';


describe('action creator tests', () => {
    test('add to favourites action creator test', () => {
        // when adding to favourites, we add the actual div cell that has been starred to an object
        // so this post simulates that 
        const post = document.createElement('div');
        const expectedOutput = {type:ADD_TO_FAVOURITES, post};
        expect(addToFavourites(post)).toEqual(expectedOutput); 
    });

    test('remove from favourites action creator test', () => {
        const post = document.createElement('div');
        const expectedOutput = {type: REMOVE_FROM_FAVOURITES, post};
        expect(removeFromFavourites(post)).toEqual(expectedOutput);
    })

    test('recieve posts action creator test', () => {
        // recieve posts is a synchronous action creator dispatched when we call the api endpoint
        const data = [{img: "img", title: "title", descr: "descr"}, {img: "img", title: "title", descr: "descr"}, {img: "img", title: "title", descr: "descr"}];
        const receivedAt = Date.now(); 
        const expected_output = {type: RECIEVE_POSTS, receivedAt, data};

        expect(recievePosts(data)).toEqual(expected_output); 
    })

    test('request posts action creator test', () => {
        const expected_output = {type:REQUEST_POSTS};
        expect(requestPosts()).toEqual(expected_output);
    })
});