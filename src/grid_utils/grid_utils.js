function makeNewGrid(gridCellsGrid = null) {
    const new_grid = document.createElement('div');
    new_grid.className = "grid";
    let numGridCellsGrid = (gridCellsGrid === null ? 9: gridCellsGrid);
    for (let i=0; i<numGridCellsGrid; i++) {
        const div = document.createElement('div');
        addImgDescrTitle(div);
        new_grid.appendChild(div);
    }
    return new_grid; 
}

function addImgDescrTitle(obj) {
    const star_div = createStarIcon();
    const recipe_descr_div = createRecipeDescrDiv(); 
    obj.appendChild(star_div);
    obj.appendChild(recipe_descr_div);
    obj.className = 'gridCell'; 
}

function createStarIcon() {
    const star_div = document.createElement('div');
    star_div.id = 'star_div'; 
    const star = createStar(); 
    const starWrapper = createStarWrapper(); 
    // need a star wrapper in order to have the cursor being pointer
    // when its being hovered 
    starWrapper.appendChild(star);
    star_div.appendChild(starWrapper);
    return star_div;
}

function createStar() {
    const star = document.createElement('i');
    star.style.zIndex = -1; 
    star.id = 'star';
    star.className = "far fa-star";
    star.style.marginRight = '10px';
    star.style.marginTop = '10px';
    star.style.transform = 'scale(1.35)'
    return star; 
}

function createStarWrapper() {
    const starWrapper = document.createElement('div');
    starWrapper.className = 'starWrapper';
    starWrapper.style.cursor = 'pointer'; 
    starWrapper.style.height = '20px';
    starWrapper.style.zIndex = 2;
    return starWrapper; 
}

function createRecipeDescrDiv() {
    const img_recipe_descr_div = document.createElement('div');
    img_recipe_descr_div.id = 'recipe_descr_div';
    const descr_title = createDescrTitleForGridCell(); 
    const img_div = createImgDivForGridCell(); 
    const holder_p_anchorLinks = configureDescriptionInfo(); 
    addChildrenTo(descr_title, holder_p_anchorLinks); 
    img_recipe_descr_div.appendChild(img_div);
    img_recipe_descr_div.appendChild(descr_title);
    return img_recipe_descr_div; 
}

function createDescrTitleForGridCell() {
    const descr_title = document.createElement('div');
    descr_title.id = 'descr_title';
    descr_title.style.position = 'relative';
    descr_title.style.bottom = '15px';
    return descr_title; 
}

function createImgDivForGridCell() {
    const img_div = document.createElement('div');
    img_div.id = "img_div";
    const img = document.createElement('img');
    img.className = 'recipeImgs'; 
    img_div.appendChild(img); 
    img.style.height = '260px';
    img.style.width = '100%';
    return img_div; 
}

function addChildrenTo(container, ...args) {
    for (let child of args) {
        container.appendChild(child); 
    }
}

function configureDescriptionInfo() {
    const recipeSourceLink = document.createElement('a');
    recipeSourceLink.target = "_blank";
    const recipeYTLink = document.createElement('a'); 
    recipeYTLink.target = "_blank";
    const recipe_title = document.createElement('h2');
    // need a spacing div in order to exact a margin between the two anchor links
    // setting margin bot directly on anchor link doesn't give desired result 
    const spacing_div = document.createElement('div'); 
    spacing_div.style.height = '20px'; 
    recipe_title.style.fontFamily = "Dosis";


    styleAnchorLinks(recipeYTLink, recipeSourceLink);

    const holder_p_anchorLinks = document.createElement('div');
    addChildrenTo(holder_p_anchorLinks,recipe_title, recipeSourceLink, spacing_div, recipeYTLink);

    return holder_p_anchorLinks;
}

function styleAnchorLinks(...args) {
    for (const obj of args) {
        obj.style.textDecoration = 'none';
        obj.style.fontFamily = "Dosis";
        obj.style.color = 'rgb(245, 85,85)';
        obj.style.fontSize = '14px';
        addHoverToLinks(obj); 
    }
}

function addSpinnerDiv() {
    const spinnerHolder = document.createElement('div');
    spinnerHolder.id = "spinnerHolder"; 
    const spinner = document.createElement('div');
    spinner.className = 'loader';
    spinnerHolder.appendChild(spinner); 
    const gridHolder = document.getElementById("gridHolder");
    gridHolder.appendChild(spinnerHolder); 
}

function searchBarSpinnerDiv() {
    const spinnerHolder = document.createElement('div');
    spinnerHolder.id = "spinnerHolder"; 
    const spinner = document.createElement('div');
    spinner.className = 'loader';
    spinnerHolder.appendChild(spinner); 

    const searchResultHolder = document.getElementById('searchResultHolder');
    searchResultHolder.style.display = 'block'; 
    document.getElementById('gridHolder').style.display = 'none'; 
    searchResultHolder.appendChild(spinnerHolder); 
}

function addHoverToLinks(obj) {
    obj.addEventListener('mouseover', function(e) {
        e.target.style.textDecoration = 'underline';
    });

    obj.addEventListener('mouseout', (e) => {
        e.target.style.textDecoration = 'none'
    });
}

function addInfoToNodes(obj, img_thumbnail, recipeTitle, strSource, strYT, idMeal) {
    obj.id = idMeal; 
    const img_gridCell = obj.querySelectorAll('.recipeImgs')[0];
    const titleRecipe = obj.querySelectorAll('h2')[0];
    const recipeSourceLink = obj.querySelectorAll('a')[0]; 
    const recipeYTLink = obj.querySelectorAll('a')[1];

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


function addInfoToGridCell(gridCell, meal) {
    console.log(meal); 
    const idMeal = meal.idMeal; 
    const img_thumbnail = meal.strMealThumb; 
    const recipeTitle = meal.strMeal; 
    const strSource = meal.strSource;
    const strYT = meal.strYoutube; 
    addInfoToNodes(gridCell, img_thumbnail, recipeTitle, strSource, strYT, idMeal); 
}





export {makeNewGrid, addImgDescrTitle, addSpinnerDiv,createRecipeDescrDiv, createStarIcon, searchBarSpinnerDiv, addInfoToGridCell};