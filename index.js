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
  var obj = recipes;
  var newRecipe = Object.assign({}, object);


  delete newRecipe.key

  return newRecipe;


}

function destructivelyDeleteFromObjectByKey(object, key) {

  delete [object].key;
  return object;

}
