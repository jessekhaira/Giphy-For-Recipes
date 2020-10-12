import {searchBarSpinnerDiv} from '../../../grid_utils/grid_utils';

export default function(state, action) {
    searchBarSpinnerDiv(); 
    document.getElementById('mainSearch').style.display = 'none';
    document.getElementById('backOffSearch').style.display = 'block'; 
    return Object.assign({}, state); 
}