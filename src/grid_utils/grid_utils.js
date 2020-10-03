function makeNewGrid() {
    const new_grid = document.createElement('div');
    new_grid.className = "grid";
    for (let i=0; i<9; i++) {
        const div = document.createElement('div');
        addImgDescrTitle(div);
        new_grid.appendChild(div);
    }
    return new_grid; 
}


function addImgDescrTitle(obj) {
    const star_div = createStarIcon();
    const recipe_descr_div = createRecipeDescrDiv(star_div); 
    obj.appendChild(recipe_descr_div);
    obj.className = 'gridCell'; 
}

function createStarIcon() {
    const star_div = document.createElement('div');
    star_div.id = 'star_div';
    const star = document.createElement('i');
    star.id = 'star';
    star.className = "far fa-star";
    star_div.appendChild(star);
    return star_div;
}

function createRecipeDescrDiv(star_div) {
    const img_recipe_descr_div = document.createElement('div');
    img_recipe_descr_div.id = 'recipe_descr_div';

    const descr_title = document.createElement('div');
    descr_title.id = 'descr_title';

    const img_div = document.createElement('div');
    img_div.id = "img_div";
    const img = document.createElement('img');
    img_div.appendChild(img); 
    img.src = "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg";

    const [recipeSourceLink, recipeYTLink, recipe_title] = configureDescriptionInfo(); 
    addChildrenTo(descr_title, star_div, recipe_title, recipeSourceLink, recipeYTLink);

    img_recipe_descr_div.appendChild(img_div);
    img_recipe_descr_div.appendChild(descr_title);
    return img_recipe_descr_div; 
}

function addChildrenTo(container, ...args) {
    for (let child of args) {
        container.appendChild(child); 
    }
}

function configureDescriptionInfo() {
    const recipeSourceLink = document.createElement('a');
    recipeSourceLink.style.marginBottom = '15px';

    const recipeYTLink = document.createElement('a'); 
    const recipe_title = document.createElement('h2');

    recipeSourceLink.className = 'linksGridCell';
    recipeYTLink.className = 'linksGridCell'; 
    recipe_title.style.fontFamily = "Dosis";

    styleAnchorLinks(recipeYTLink, recipeSourceLink);

    return [recipeSourceLink, recipeYTLink, recipe_title]; 
}

function styleAnchorLinks(...args) {
    for (const obj of args) {
        obj.style.textDecoration = 'none';
        obj.style.fontFamily = "Dosis";
        obj.style.color = '#C3073F';
        addHoverToLinks(obj); 
    }
}


function addHoverToLinks(obj) {
    obj.addEventListener('mouseover', function(e) {
        e.target.style.textDecoration = 'underline';
    });

    obj.addEventListener('mouseout', (e) => {
        e.target.style.textDecoration = 'none'
    });
}

export {makeNewGrid, addImgDescrTitle, createRecipeDescrDiv, createStarIcon};