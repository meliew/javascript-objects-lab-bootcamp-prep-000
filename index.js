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
  var object = { key }
   
  var newObj = Object.assign({}, object)
   
  newObj
   
  delete newObj.key
   
  newObj
   
  object 
}

function destructivelyDeleteFromObjectByKey(object, key) {

  delete [object].key;
  return object;

}
