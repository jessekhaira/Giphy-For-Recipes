import {makeNewGrid, addInfoToGridCell} from '../../../grid_utils/grid_utils';

export default function (state, action) {
    let arrayOfMeals = action.posts.meals; 
    let searchHolder = document.getElementById('searchResultHolder');
    // whether or not match is found, we will always remove the spinner because
    // we're not in process of fetching data 
    searchHolder.removeChild(document.getElementById('spinnerHolder'));
    // means that no match was found for search so just return 
    if (arrayOfMeals === null) {
        return Object.assign({}, state, {showingSearch: true}); 
    }
    return mealsFoundReducer(arrayOfMeals, state, searchHolder);
}

function mealsFoundReducer(arrayOfMeals, state, searchHolder) {
    let totalMeals= arrayOfMeals.length;
    let numGridCellsGrid = (totalMeals >= 9 ? null: totalMeals); 
    let grid = makeNewGrid(numGridCellsGrid); 
    let idxGridChild = 0; 
    let mealIds = 97;
    for (let [i, meal] of arrayOfMeals.entries()) {
        // grid is 3x3, if the current grid is filled up create a new grid 
        if (i !== 0 && i%9 === 0) {
            numGridCellsGrid = (totalMeals >= 9 ? null: totalMeals); 
            searchHolder.appendChild(grid);
            grid = makeNewGrid(numGridCellsGrid); 
            idxGridChild = 0; 
        }
        addInfoToGridCell(grid.children[idxGridChild], meal); 
        totalMeals--; 
        idxGridChild++; 
        mealIds++; 
    }
    searchHolder.appendChild(grid); 
    return Object.assign({}, state, {showingSearch: true}); 
}