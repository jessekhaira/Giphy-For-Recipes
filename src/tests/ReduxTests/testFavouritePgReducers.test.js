import {favouritesPageReducer} from '../../Redux/reducers/favouritesPageReducer';
import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from '../../Redux/reduxUtility';
import addToFavourites from '../../Redux/action creators/addToFavourites';
import removeFromFavourites from '../../Redux/action creators/removeFromFavourites';

 describe('Testing Favourite page reducers', () => {
     test('Test adding to favourites page reducer', () => {
         const post = document.createElement('div');
         post.id = 'test';
         const addToFavouritesAction = addToFavourites(post);
         const removeFromFavouritesAction = removeFromFavourites(post);

         const expectedOutput = {
             'test': post
         };


         expect(expectedOutput).toEqual(favouritesPageReducer({}, addToFavouritesAction));
     })

     test('Test removing from favourites page reducer', () => {
        const post1 = document.createElement('div');
        post1.id = 'test1';
        const post2 = document.createElement('div');
        post2.id = 'test2';

        const removeFromFavouritesAction = removeFromFavourites(post1);

        const expectedOutput = {
            'test2': post2
        };

        const init_state = {
            'test1': post1, 
            'test2': post2
        }


        expect(expectedOutput).toEqual(favouritesPageReducer(init_state, removeFromFavouritesAction));
    })
 })