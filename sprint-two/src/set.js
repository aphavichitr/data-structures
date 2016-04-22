var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage = this._storage || [];
  if (!_.contains(this._storage, item) ) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  var newArray = [];
  for ( var i = 0; i < this._storage.length; i++ ) {
    if ( this._storage[i] !== item ) {
      newArray.push(this._storage[i]);
    }
  }
  this._storage = newArray;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
