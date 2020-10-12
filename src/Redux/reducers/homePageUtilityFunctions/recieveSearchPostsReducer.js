import addApiInfoToGrid from "./addApiInfoToGrid";
import {makeNewGrid} from '../../../grid_utils/grid_utils';
import {addInfoToNodes} from '../../../grid_utils/grid_utils';

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
    let grid = makeNewGrid(String.fromCharCode(96), numGridCellsGrid); 
    let idxGridChild = 0; 
    // tricky edge case here - the search bar grid cells need id's unique from the 
    // home page grid cells. Decided to just encode ints to strings with String.fromCharCode(int)
    // to achieve that 
    let mealIds = 97;
    for (let [i, meal] of arrayOfMeals.entries()) {
        // grid is 3x3, if the current grid is filled up create a new grid 
        if (i !== 0 && i%9 === 0) {
            numGridCellsGrid = (totalMeals >= 9 ? null: totalMeals); 
            searchHolder.appendChild(grid);
            grid = makeNewGrid(String.fromCharCode(mealIds), numGridCellsGrid); 
            idxGridChild = 0; 
        }
        addSearchInfoGrid(grid.children[idxGridChild], meal); 
        totalMeals--; 
        idxGridChild++; 
        mealIds++; 
    }
    searchHolder.appendChild(grid); 
    return Object.assign({}, state, {showingSearch: true}); 
}

function addSearchInfoGrid(gridCell, meal) {
    const img_thumbnail = meal.strMealThumb; 
    const recipeTitle = meal.strMeal; 
    const strSource = meal.strSource;
    const strYT = meal.strYoutube; 
    addInfoToNodes(gridCell, img_thumbnail, recipeTitle, strSource, strYT)
}

