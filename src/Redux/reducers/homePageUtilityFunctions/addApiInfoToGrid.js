export default function addApiInfoToGrid(action, newGridChildren, i) {
    const data_obj = action.data[i];
    const img_thumbnail = data_obj.meals[0].strMealThumb; 
    const recipeTitle = data_obj.meals[0].strMeal; 
    const strSource = data_obj.meals[0].strSource;
    const strYT = data_obj.meals[0].strYoutube; 
    
    const img_gridCell = newGridChildren[i].querySelectorAll('.recipeImgs')[0];
    const titleRecipe = newGridChildren[i].querySelectorAll('h2')[0];
    const recipeSourceLink = newGridChildren[i].querySelectorAll('a')[0]; 
    const recipeYTLink = newGridChildren[i].querySelectorAll('a')[1]; 

    img_gridCell.src = img_thumbnail;
    titleRecipe.innerHTML = recipeTitle; 
    //txt nodes to add to paragraph elements
    if (strSource) {
        recipeSourceLink.href = strSource; 
        recipeSourceLink.innerHTML = 'Click me to find out more information about this recipe!'
    }
    recipeYTLink.href = strYT;
    if (strYT) {
        recipeYTLink.innerHTML = 'Click me to find out more information about this recipe in video format!'
    }

    if (!strSource && !strYT) {
        recipeSourceLink.innerHTML = 'No further information about this recipe available'
    }
}

