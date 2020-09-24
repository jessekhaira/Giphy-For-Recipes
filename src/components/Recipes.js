import React from 'react';

class Recipes extends React.Component{

    componentDidMount() {
        this._initGridCells();
    }

    _initGridCells() {
        const gridCells = document.getElementById('grid').children;
        let i =0;
        for (const cell of gridCells) {
            const img_recipe = document.createElement('img');
            const recipe_descr = document.createElement('p');
            const recipe_title = document.createElement('h2');
            cell.appendChild(img_recipe);
            cell.appendChild(recipe_descr);
            cell.appendChild(recipe_title);
        }
    }

    render() {
        return(
            <div id = "grid">
                <div className = "gridCell"></div>
                <div className = "gridCell"></div>
                <div className = "gridCell"></div>

                <div className = "gridCell"></div>
                <div className = "gridCell"></div>
                <div className = "gridCell"></div>

                <div className = "gridCell"></div>
                <div className = "gridCell"></div>
                <div className = "gridCell"></div>
            </div>
        )
    }
}

export default Recipes; 