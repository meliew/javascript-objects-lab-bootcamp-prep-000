var recipes = { ingredients: "eggs" }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  // deletes key from clone of object
  // returns new object
  var recipes = { ingredients: 'eggs' }

  var newObj = Object.assign({}, recipes)

  newObj

  delete newObj.key

  return newObj;


}

function destructivelyDeleteFromObjectByKey(object, key) {

  delete [object].key;
  return object;

}
