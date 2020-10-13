# API-Recipe-App
## Description
This is a single-page app I built using React and Redux utilizing the free recipe API provided at: https://www.themealdb.com/api.php?ref=apilist.fun.

The motivation for the project was to build an app similar to giphy for recipes, work with a real API, and practice some of the more advanced aspects of react, redux and react-router (asynchronous requests, redux thunks). 

The app is deployed on github pages and can be accessed at: https://13jk59.github.io/Recipes-Api-React-Redux/. 

## Features
* Pulls 9 random recipes from the API when page first loads and templates api information in grids
* Infinite scrolling implemented from scratch, loads 9 new recipes from the API every time the user scrolls to the bottom of the page
* Media queries make website fully responsive  
* User can search for a specific recipe using the search feature 
* Favourite feature supports favouriting or unfavouriting recipes on all routes. Favourited recipes can be viewed later on the favourites tab. 

## Screenshots
Main UI. When home route is initialized, spinner is shown until data loads. 
<br> 
<img src="./screenshots/Initial Page Load.png" width="600">

Home route after data loads 
<br>
<img src="./screenshots/Initial Data Load.png" width = "600">
<br>


