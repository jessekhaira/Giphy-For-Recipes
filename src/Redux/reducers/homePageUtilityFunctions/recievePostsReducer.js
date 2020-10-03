import {makeNewGrid} from '../../../grid_utils/grid_utils';

export default function recievePostsReducer(state, action) {
    const newItems = [];
    for (const grid of state.items) {
        newItems.push(grid.cloneNode()); 
    }
    const newGridAdded = makeNewGrid();
    // add the recipe data to each grid cell one by one 
    const newGridChildren = newGridAdded.children;
    for (let i=0; i<9; i++) {
        const data_obj = action.data[i];
        const img_thumbnail = data_obj.meals[0].strMealThumb; 
        const recipeTitle = data_obj.meals[0].strMeal; 
        const mealCateogry = data_obj.meals[0].strCategory;
        const strMeal = data_obj.meals[0].strMeal;
        const furtherInformation = data_obj.meals[0].strSource; 

        // nested deep to get to the img tag and description of the recipe 
        const img_gridCell = newGridChildren[i].children[0].children[0].children[0];
        const titleRecipe = newGridChildren[i].children[0].children[1].children[1];
        const descriptionRecipe = newGridChildren[i].children[0].children[1].children[2]; 

        img_gridCell.src = img_thumbnail;
        titleRecipe.innerHTML = recipeTitle; 
        let textArea = document.createTextNode("Meal Category: " + mealCateogry);
        //txt nodes to add to paragraph elements
        descriptionRecipe.appendChild(textArea);
    }

    newItems.push(newGridAdded); 

    return Object.assign({}, 
        {isFetching: false, lastUpdated: action.receivedAt, items: newItems}
    );
}

