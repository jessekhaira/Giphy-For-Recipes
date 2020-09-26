import React from 'react';

class Recipes extends React.Component{
    constructor(props) {
        super(props);

        // need local state for grid
        this._addWindowEventListener = this._addWindowEventListener.bind(this);
        this._windowEventListener = this._windowEventListener.bind(this);
        this._initGridCells = this._initGridCells.bind(this);
        this._makeNewGrid = this._makeNewGrid.bind(this);
    }


    componentDidMount() {
        this._initGridCells();
        // Adding event listener to the window because we want to automatically go and 
        // get new data if we scroll past a certain point 
        this._addWindowEventListener();

        // force window to always start at 0,0 on refresh to make sure all async activity
        // works properly
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
    }


    _addWindowEventListener() {
        window.addEventListener('scroll',this._windowEventListener);
    }

    _windowEventListener() {
        // make an entirely new grid when we want to load more with infinite loading
        const new_grid = this._makeNewGrid(); 
        const gridHolder = document.getElementById('gridHolder');
        const lastGrid = gridHolder.children[gridHolder.children.length-1];
        let totalHeight = 0; 
        let equalityNum = 10; 
        // +125 and -6952 come from playing around on the browser and finding values
        // that'll make the equality work as expected (when user scrolls past the last grid cell
        // in the last grid, add new grid). Also need an if statement here to account for the fact
        // we have a media query so the totalHeight the user has to have scrolled is different
        // depending on width of the doc element 
        if (document.documentElement.clientWidth >= 1000) {
            totalHeight = lastGrid.scrollHeight+window.scrollY+125;
        }
        else if (document.documentElement.clientWidth < 1000) {
            totalHeight = lastGrid.scrollHeight+window.scrollY-1394;

        }
        if (Math.abs(totalHeight-document.documentElement.offsetHeight) <=equalityNum){
            gridHolder.appendChild(new_grid);
        }
    }

    _makeNewGrid() {
        const new_grid = document.createElement('div');
        new_grid.className = "grid";
        for (let i=0; i<9; i++) {
            const div = document.createElement('div');
            this._addImgDescrTitle(div);
            new_grid.appendChild(div);
        }
        return new_grid; 
    }

    _initGridCells() {
        const gridCells = document.getElementById('grid1').children;
        for (const cell of gridCells) {
            this._addImgDescrTitle(cell);
        }
    }

    _addImgDescrTitle(obj) {
        const star_div = this._createStarIcon();
        const recipe_descr_div = this._createRecipeDescrDiv(star_div); 
        obj.appendChild(recipe_descr_div);
        obj.className = 'gridCell'; 
    }

    _createStarIcon() {
        const star_div = document.createElement('div');
        star_div.id = 'star_div';
        const star = document.createElement('i');
        star.id = 'star';
        star.className = "far fa-star";
        star_div.appendChild(star);
        return star_div;
    }

    _createRecipeDescrDiv(star_div) {
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
        recipe_descr.innerHTML = "description";
        recipe_title.innerHTML = "title";

        descr_title.appendChild(star_div);
        descr_title.appendChild(recipe_title);
        descr_title.appendChild(recipe_descr);

        img_recipe_descr_div.appendChild(img_div);
        img_recipe_descr_div.appendChild(descr_title);
        return img_recipe_descr_div; 
    }


    render() {
        return(
            <div id = "gridHolder">
                <div id = "grid1" className = "grid">
                    <div></div>
                    <div></div>
                    <div></div>

                    <div></div>
                    <div></div>
                    <div></div>

                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Recipes; 