import {combineReducers} from 'redux';
import {favouritesPageReducer} from './favouritesPageReducer';
import {homePageReducer} from './homePageReducer';


export const rootReducer = combineReducers({
    favourites: favouritesPageReducer,
    homePage: homePageReducer
});

