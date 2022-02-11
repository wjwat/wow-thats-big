const {getRandomArray, getSanitizedQueryParams, getDefaultFilterValues, defaultHeaders} = require('./../utils.js');

const filters = {
  size: {
    defaultValue: 25,
    validate(n) {
      return Number.isInteger(n) && n < 201 && n > 0
    },
    serialize(n) {
      return parseInt(n, 10)
    }
  },
  upper: {
    defaultValue: 100,
    validate(n) {
      return Number.isInteger(n) && n < 1001 && n > 0
    },
    serialize(n) {
      return parseInt(n, 10)
    }
  }
}

const defaultFilterValues = getDefaultFilterValues(filters);

exports.handler = async function({ queryStringParameters }) {
  console.log(queryStringParameters);
  console.log(getSanitizedQueryParams(filters, queryStringParameters));
  const options = {
    ...defaultFilterValues,
    ...getSanitizedQueryParams(filters, queryStringParameters)
  }
  const headers = {
    ...defaultHeaders
  }
  const body = JSON.stringify(getRandomArray(options))

  return {
    statusCode: 200,
    headers,
    body
  }
}
