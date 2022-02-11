const items = require('./wowthatsbig/wowthatsbig.json');

exports.defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Content-Type': 'application/json'
}

exports.getDefaultFilterValues = (filters) => {
  return Object.entries(filters).reduce(
    (acc, [key]) => (
      {...acc, [key]: filters[key].defaultValue }
    ), 
    {}
  )
}

exports.getSanitizedQueryParams = (filters, queryParams) => 
  Object.entries(queryParams).reduce((acc, [key, value]) => {
    if (!filters[key]) {
      return acc
    }

    const serializedValue = filters[key].serialize(value)

    if (!filters[key].validate(serializedValue)) {
      return acc
    }

    return {
      ...acc,
      [key]: serializedValue
    }
    
  }, {})

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


exports.getRandomArray = ({ size, upper }) => {
  return Array.from({length: size}, () => getRandomIntInclusive(0, upper));
}

exports.getRandomItem = () => {
  const itemNames = Object.keys(items);
  let x = Math.floor(Math.random() * itemNames.length);
  return {[itemNames[x]]: items[itemNames[x]]};
}
