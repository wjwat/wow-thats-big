const {getRandomItem, defaultHeaders} = require('./../utils.js');

exports.handler = async function() {
  let headers = defaultHeaders;
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(getRandomItem())
  };
}
