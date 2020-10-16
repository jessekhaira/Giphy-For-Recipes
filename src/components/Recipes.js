import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
let count = 0; 
class Recipes extends React.Component{
    constructor(props) {
        super(props);
        // need local state for grid
        this._addWindowEventListener = this._addWindowEventListener.bind(this);
        this._windowEventListener = this._windowEventListener.bind(this);
    }


    componentDidMount() {
        // Adding event listener to the window because we want to automatically go and 
        // get new data if we scroll past a certain point - infinite scrolling 
        // should be disabled for favourites route though 
        this._addWindowEventListener();
        // if no items stored in the state, fetch some and make first grid only if we aren't already fetching
        // if you have items to display, display them 
        if (this.props.items.length === 0) {
            this.props.fetchRandomPosts();
        }
        if (this.props.items.length > 0) {
            this._addAllGridsToGridHolder(); 
            this._addClickEventListenerStar(); 
            // we allow the favourites status to be updated on the favourites page as well, so just check
            // here which elements are favourited and which are not and color stars accordingly
            this.props._updateStarStatus(document.getElementById('gridHolder')); 
            this.props.addHoverToAllAnchorLinks(); 
        }
    }

    /**
     * This method is used to add every single div held currently in the state to the grid holder.
     */
    _addAllGridsToGridHolder() {
        // needed when component is re-mounted when coming back from a different route 
        const gridHolder = document.getElementById('gridHolder');
        for (let grid of this.props.items) {
            gridHolder.appendChild(grid); 
        }
    }

    /**
     * This method adds a grid to the grid holder. Used mainly to implement infinite scrolling, to add
     * the newest grid created to the grid holder. 
     * @param {HTMLElement} lastGrid The new grid to be added to the grid holder. 
     */
    _addLastGridToGridHolder(lastGrid) {
        const gridHolder = document.getElementById('gridHolder');
        gridHolder.appendChild(lastGrid); 
    }

    /**
     * This method adds an event listener for the star icon in every single grid cell currently displayed
     * on the page. 
     * @param {HTMLElement} lastGridAdded If null, indicates we need to add event listener for every single grid
     * on the page. If not null, new grid was added with infinite scrolling, so we have to add this event listener 
     * for those cells. 
     */
    _addClickEventListenerStar(lastGridAdded = null) {
        // This method should have two different behaviours
        // One behaviour accounts for infinite scrolling
        // For inf scrolling, lastGridAdded will be provided 
        // and only that grid should recieve the event listener
        // If the component is remounting after returning after a route however, event listeners should be 
        // provided to every single icon element 
        if (!lastGridAdded) {
            [...document.getElementsByTagName('i')].forEach((starWrapper) => {
                starWrapper.addEventListener('click', this.props._starIconClickHandler);
            });
        }
        else {
            [...lastGridAdded.querySelectorAll('i')].forEach((starWrapper) => {
                starWrapper.addEventListener('click', this.props._starIconClickHandler); 
            });
        } 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items.length !== this.props.items.length) {
            // only add the star event listener to the last grid added
            let lastGridAdded = this.props.items[this.props.items.length-1]; 
            this._addLastGridToGridHolder(lastGridAdded); 
            this._addClickEventListenerStar(lastGridAdded); 
            this.props.addHoverToAllAnchorLinks(); 
           }
    }

    componentWillUnmount() {
        [...document.getElementsByTagName('i')].forEach((starWrapper) => {
            starWrapper.removeEventListener('click', this._starIconClickHandler);
        }) 

        window.removeEventListener('scroll', this._windowEventListener);
    }

    _addWindowEventListener() {
        window.addEventListener('scroll',this._windowEventListener);
    }

    _windowEventListener() {
        // account for fact we could be fetching data right now or we're currently showing
        // searched for items 
        if (this.props.isFetching || this.props.showingSearch) {
            return;
        }
        const currentHeightOfPage = window.innerHeight + document.documentElement.scrollTop +1;
        if (currentHeightOfPage>= document.documentElement.offsetHeight) {
            this.props.fetchRandomPosts(); 
        }
    }

    render() {
        return(
            <div id = "recipe_holder">
                <div id = "gridHolder"></div>
            </div>
        )
    }
}

export default Recipes; 