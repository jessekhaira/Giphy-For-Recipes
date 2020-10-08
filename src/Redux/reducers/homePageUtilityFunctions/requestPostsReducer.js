import {addSpinnerDiv} from '../../../grid_utils/grid_utils';

export default function requestPostsReducer(state, action) {
    addSpinnerDiv(); 
    return Object.assign({}, state, {isFetching:true});
}

