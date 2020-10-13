import {favouritesPageReducer} from '../../Redux/reducers/favouritesPageReducer';
import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from '../../Redux/reduxUtility';
import addToFavourites from '../../Redux/action creators/addToFavourites';
import removeFromFavourites from '../../Redux/action creators/removeFromFavourites';

 describe('Testing Favourite page reducers', () => {
     test('Test adding to favourites page reducer', () => {
         const post = document.createElement('div');
         post.classList.add('1');
         post.classList.add('234'); 
         const addToFavouritesAction = addToFavourites(post);
         const removeFromFavouritesAction = removeFromFavourites(post);

         const expectedOutput = new Map();
         expectedOutput.set(post.classList[post.classList.length-1], post);


         expect(expectedOutput).toEqual(favouritesPageReducer(new Map(), addToFavouritesAction));
     })

     test('Test removing from favourites page reducer', () => {
        const post1 = document.createElement('div');
        post1.classList.add('1');
        post1.classList.add('234');         
        const post2 = document.createElement('div');
        post2.classList.add('1');
        post2.classList.add('456');

        const removeFromFavouritesAction = removeFromFavourites(post1);

        const expectedOutput = new Map();
        expectedOutput.set(post2.classList[post2.classList.length-1], post2);


        expect(expectedOutput).toEqual(favouritesPageReducer(expectedOutput, removeFromFavouritesAction));
    })
 })