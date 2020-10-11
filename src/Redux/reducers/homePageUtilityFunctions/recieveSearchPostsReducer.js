import addApiInfoToGrid from "./addApiInfoToGrid";
import {makeNewGrid} from '../../../grid_utils/grid_utils';

export default function (state, action) {
    let arrayOfMeals = action.posts.meals; 
    let searchHolder = document.getElementById('searchResultHolder');
    // whether or not match is found, we will always remove the spinner because
    // we're not in process of fetching data 
    searchHolder.removeChild(document.getElementById('spinnerHolder'));
    // means that no match was found for search so just return 
    if (arrayOfMeals === null) {
        return state; 
    }
    let totalMeals= arrayOfMeals.length;
    let numGridCellsGrid = (totalMeals >= 9 ? null: totalMeals); 
    let grid = makeNewGrid(0, numGridCellsGrid); 
    let idxGridChild = 0; 
    for (let [i, meal] of arrayOfMeals.entries()) {
        // grid is 3x3, if the current grid is filled up create a new grid 
        if (i !== 0 && i%9 === 0) {
            numGridCellsGrid = (totalMeals >= 9 ? null: totalMeals); 
            searchHolder.appendChild(grid);
            grid = makeNewGrid(i, numGridCellsGrid); 
            idxGridChild = 0; 
        }
        addSearchInfoGrid(grid.children[idxGridChild], meal); 
        totalMeals--; 
        idxGridChild++; 
    }
    searchHolder.appendChild(grid); 
    // showing search is already true
    // so the state is exactly the same as it was entering this reducer 
    // IE: search results aren't cached 
    return Object.assign({}, state);
}

function addSearchInfoGrid(gridCell, meal) {
    console.log(meal); 
    console.log(gridCell); 
    
}

