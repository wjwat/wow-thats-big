const {getRandomItem} = require('./../utils.js');
const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Content-Type': 'application/json'
}

exports.handler = async function() {
  let headers = defaultHeaders;
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(getRandomItem())
  };
}
