import {searchBarSpinnerDiv} from '../../../grid_utils/grid_utils';

export default function(state, action) {
    searchBarSpinnerDiv(); 
    return Object.assign({}, state, {showingSearch:true}); 
}