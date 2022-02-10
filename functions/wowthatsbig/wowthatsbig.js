const items = require('./wowthatsbig.json');
const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Content-Type': 'application/json'
}

const getRandomItem = () => {
  const itemNames = Object.keys(items);
  let x = Math.floor(Math.random() * itemNames.length);
  return {[itemNames[x]]: items[itemNames[x]]};
}

exports.handler = async function({ queryStringParameters }) {
  let headers = defaultHeaders;
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(getRandomItem())
  };
}
