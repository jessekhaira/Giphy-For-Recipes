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

    const recipe_descr = document.createElement('p');
    const recipe_title = document.createElement('h2');
    recipe_title.innerHTML = "title";

    descr_title.appendChild(star_div);
    descr_title.appendChild(recipe_title);
    descr_title.appendChild(recipe_descr);

    img_recipe_descr_div.appendChild(img_div);
    img_recipe_descr_div.appendChild(descr_title);
    return img_recipe_descr_div; 
}

export {makeNewGrid, addImgDescrTitle, createRecipeDescrDiv, createStarIcon};