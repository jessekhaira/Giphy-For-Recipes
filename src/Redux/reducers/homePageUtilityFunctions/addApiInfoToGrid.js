export default function addApiInfoToGrid(action, newGridChildren, i) {
    const data_obj = action.data[i];
    const img_thumbnail = data_obj.meals[0].strMealThumb; 
    const recipeTitle = data_obj.meals[0].strMeal; 
    const strSource = data_obj.meals[0].strSource;
    const strYT = data_obj.meals[0].strYoutube; 
    // nested deep to get to the img tag and description of the recipe 
    const img_gridCell = newGridChildren[i].children[1].children[0].children[0];
    const titleRecipe = newGridChildren[i].children[1].children[1].children[0].children[0];
    const recipeSourceLink = newGridChildren[i].children[1].children[1].children[0].children[1]; 
    const recipeYTLink = newGridChildren[i].children[1].children[1].children[0].children[3];

    img_gridCell.src = img_thumbnail;
    titleRecipe.innerHTML = recipeTitle; 
    //txt nodes to add to paragraph elements
    recipeSourceLink.href = strSource; 
    recipeSourceLink.innerHTML = 'Click me to find out more information about this recipe!'

    recipeYTLink.href = strYT;
    if (strYT.length !== 0) {
        recipeYTLink.innerHTML = 'Click me to find out more information about this recipe in video format!'
    }
}