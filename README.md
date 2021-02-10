# API-Recipe-App
## Description
This is a single-page app I built with React, Redux, and Sass, utilizing the free recipe API provided at: https://www.themealdb.com/api.php?ref=apilist.fun.

The motivation for the project was to build an app similar to giphy for recipes. 

The app is deployed on github pages and can be accessed at: https://13jk59.github.io/Giphy-For-Recipes/. 

## Features
* Pulls 9 random recipes from the API when page first loads and templates api information in grids
* Infinite scrolling implemented from scratch, loads 9 new recipes from the API every time the user scrolls to the bottom of the page
* Media queries make website fully responsive  
* User can search for a specific recipe using the search feature 
* Favourite feature supports favouriting or unfavouriting recipes on all routes. Favourited recipes can be viewed later on the favourites tab. 

## Installation
```
git clone https://github.com/13jk59/Giphy-For-Recipes.git
cd Giphy-For-Recipes
npm install
npm start
```

## Screenshots
Main UI. When home route is initialized, redux thunk is dispatched for async call to fetch data
<br> 
<img src="./screenshots/Initial Page Load.png" width="700">

Home route after async call returns data 
<br>
<img src="./screenshots/Initial Data Load.png" width = "700">
<br>

Favourite feature shown here, with ability to favourite recipes on home page 
<br>
<img src="./screenshots/Showing Favourites Feature.png" width = "700">
<br>

After favouriting recipes, you can see them on the favourites route
<br>
<img src="./screenshots/Favourites Route.png" width = "700">
<br>

Search feature. User can search for any recipe they'd like 
<br>
<img src="./screenshots/search bar feature.png" width = "700">
<br>

Results of search (free-tier of api provides 100 recipes) 
<br>
<img src="./screenshots/search bar results.png" width = "700">
<br>
