function fetchRandom() {
  return fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(data => data.json());
}

export default fetchRandom; 