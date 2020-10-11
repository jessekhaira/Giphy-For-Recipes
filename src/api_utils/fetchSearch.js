const fetch = require("node-fetch");

export default function(text) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`).then(data => data.json());
}