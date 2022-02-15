const {defaultHeaders} = require('./../utils.js');
const items = require('./randomjoke.json');

const getRandomItem = () => {
  let x = Math.floor(Math.random() * items.length);
  return [items[x]];
}

exports.handler = async function() {
  let headers = defaultHeaders;
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(getRandomItem())
  };
}
