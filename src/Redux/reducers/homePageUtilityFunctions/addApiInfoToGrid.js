import {addInfoToNodes} from '../../../grid_utils/grid_utils'
export default function addApiInfoToGrid(action, newGridChildren, i) {
    const data_obj = action.data[i];
    const img_thumbnail = data_obj.meals[0].strMealThumb; 
    const recipeTitle = data_obj.meals[0].strMeal; 
    const strSource = data_obj.meals[0].strSource;
    const strYT = data_obj.meals[0].strYoutube; 
    addInfoToNodes(newGridChildren[i], img_thumbnail, recipeTitle, strSource, strYT); 
}
