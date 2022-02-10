const items = require('./wowthatsbig.json');

exports.getRandomItem = () => {
  const itemNames = Object.keys(items);
  let x = Math.floor(Math.random() * itemNames.length);
  return {[itemNames[x]]: items[itemNames[x]]};
}
