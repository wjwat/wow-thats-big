const {defaultHeaders} = require('./../utils.js');
const items = require('./wowthatsbig.json');

const getRandomItem = () => {
  const itemNames = Object.keys(items);
  let x = Math.floor(Math.random() * itemNames.length);
  return {[itemNames[x]]: items[itemNames[x]]};
}

exports.handler = async function() {
  let headers = defaultHeaders;
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(getRandomItem())
  };
}
