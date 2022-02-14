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
