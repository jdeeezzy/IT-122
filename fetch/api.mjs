const api_endpoint = 'https://yomomma-api.herokuapp.com/jokes'

const response = await fetch(api_endpoint);

const data = await response.json();

console.log(data);

console.log(data.facts);