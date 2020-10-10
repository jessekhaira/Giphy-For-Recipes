import React from 'react';
let count = 0; 
class Recipes extends React.Component{
    constructor(props) {
        super(props);
        // need local state for grid
        this._addWindowEventListener = this._addWindowEventListener.bind(this);
        this._windowEventListener = this._windowEventListener.bind(this);
        this._starIconClickHandler = this._starIconClickHandler.bind(this); 
    }


    componentDidMount() {
        // Adding event listener to the window because we want to automatically go and 
        // get new data if we scroll past a certain point - infinite scrolling 
        // should be disabled for favourites route though 
        this._addWindowEventListener();
        // force window to always start at 0,0 on refresh to make sure all async activity
        // works properly 
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }

        // if no items stored in the state, fetch some and make first grid
        // if items are stored, then grab them all and display them in a grid 
        if (this.props.items.length === 0) {
            this.props.fetchRandomPosts();
        }

        if (!this.props.isFetching) {
            this._addAllGridsToGridHolder(); 
            this._addClickEventListenerStar(); 
        }
    }
    _addAllGridsToGridHolder() {
        // needed when component is re-mounted when coming back from a different route 
        const gridHolder = document.getElementById('gridHolder');
        for (let grid of this.props.items) {
            gridHolder.appendChild(grid); 
        }
    }
    _addLastGridToGridHolder(lastGrid) {
        const gridHolder = document.getElementById('gridHolder');
        gridHolder.appendChild(lastGrid); 
    }

    _addClickEventListenerStar(lastGridAdded = null) {
        // This method should have two different behaviours
        // One behaviour accounts for infinite scrolling
        // For inf scrolling, lastGridAdded will be provided 
        // and only that grid should recieve the event listener
        // If the component is remounting after returning after a route however, event listeners should be 
        // provided to every single icon element 
        if (!lastGridAdded) {
            [...document.getElementsByTagName('i')].forEach((starWrapper) => {
                starWrapper.addEventListener('click', this._starIconClickHandler);
            });
        }
        else {
            [...lastGridAdded.querySelectorAll('i')].forEach((starWrapper) => {
                starWrapper.addEventListener('click', this._starIconClickHandler); 
            })
        } 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items.length !== this.props.items.length) {
            // only add the star event listener to the last grid added
            let lastGridAdded = this.props.items[this.props.items.length-1]; 
            this._addLastGridToGridHolder(lastGridAdded); 
            this._addClickEventListenerStar(lastGridAdded); 
           }
    }

    componentWillUnmount() {
        [...document.getElementsByTagName('i')].forEach((starWrapper) => {
            starWrapper.removeEventListener('click', this._starIconClickHandler);
        }) 
    }

    _starIconClickHandler(e) {
        let iconStar = e.target;
        // if the user clicks directly on star, the e will be the icon and not the wrapper, which is
        // what we want it to be
        const potentialPost = e.target.closest('.gridCell'); 
        // we will check if the post is already in the favourites
        // if it is, then that means we are removing this from the favourites, not adding it
        // and the star icon should go from filled to unfilled. Otherwise, if the post is not
        // in the favourites, then that means star icon goes from unfilled to filled and gets added
        // to the favourites 
        // if the user clicks directly on star, the e will be the icon and not the wrapper, which is
        // what we want it to be
        count += 1 
        if (this.props.favourites.has(potentialPost.id)) {
            this.props.removeFromFavourites(potentialPost); 
            iconStar.className = 'far fa-star '
        }
        else {
            this.props.addToFavourites(potentialPost); 
            iconStar.className = 'fas fa-star '
        }
    }


    _addWindowEventListener() {
        window.addEventListener('scroll',this._windowEventListener);
    }

    _windowEventListener() {
        // account for different routes - /favourites doesn't have infinite scrolling
        // account for fact we could be fetching data right now 
        if (document.getElementById('gridHolder') === null || this.props.isFetching) {
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
                <div id = "gridHolder">
                </div>
            </div>
        )
    }
}

export default Recipes; 