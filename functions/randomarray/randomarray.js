const {getSanitizedQueryParams, getDefaultFilterValues, defaultHeaders} = require('./../utils.js');

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

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


getRandomArray = ({ size, upper }) => {
  return Array.from({length: size}, () => getRandomIntInclusive(0, upper));
}

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
