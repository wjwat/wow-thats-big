import items from './wowthatsbig.json';


exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items)
  };
}
