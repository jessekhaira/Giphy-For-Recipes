import React from 'react';

class Recipes extends React.Component{
    constructor(props) {
        super(props);

        // need local state for grid
        this.state = {numGrids:1}; 
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
        const lastGridNum = lastGrid.id[lastGrid.id.length-1];
        // console.log(window.scrollY);
        // console.log(document.documentElement.scrollHeight); 
        const totalHeight = lastGrid.scrollHeight+window.scrollY+125;
        console.log(document.documentElement.offsetHeight);
        console.log(totalHeight);
        if (Math.abs(totalHeight-document.documentElement.offsetHeight) <=10){
            this.setState((state) => ({numGrids:this.state.numGrids+1}));
            // always keeping three columns, but num rows goes up by 3 to account for
            // new api calls 
            gridHolder.appendChild(new_grid);
        }
    }

    _makeNewGrid() {
        const new_grid = document.createElement('div');
        this._setGridProperties(new_grid);
        for (let i=0; i<9; i++) {
            const div = document.createElement('div');
            this._addImgDescrTitle(div);
            new_grid.appendChild(div);
        }
        return new_grid; 
    }

    _setGridProperties(new_grid) {
        new_grid.style.display = 'grid';
        new_grid.style.gridTemplateRows = `repeat(3, minmax(100px, 1fr))`;
        new_grid.style.gridTemplateColumns = `repeat(3, minmax(150px, 0.3fr))`;
        new_grid.style.height = '720px';
        new_grid.style.justifyContent = 'center';
        new_grid.style.gap = '5px 15px';
    }



    _initGridCells() {
        const gridCells = document.getElementById('grid1').children;
        this._setGridProperties(document.getElementById('grid1'));
        let i =0;
        for (const cell of gridCells) {
            this._addImgDescrTitle(cell);
        }
    }

    _addImgDescrTitle(obj) {
        const img_recipe = document.createElement('img');
        const recipe_descr = document.createElement('p');
        const recipe_title = document.createElement('h2');
        obj.appendChild(img_recipe);
        obj.appendChild(recipe_descr);
        obj.appendChild(recipe_title);
        obj.className = 'gridCell'; 
    }

    render() {
        return(
            <div id = "gridHolder">
                <div id = "grid1">
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