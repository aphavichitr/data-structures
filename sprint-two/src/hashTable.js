

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuple = {};

  tuple[k] = v;
  bucket.push(tuple);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for ( var i = 0; i < bucket.length; i++ ) {
    if (bucket[i][k]) {
      return bucket[i][k];
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // [
  //   [
  //     {cat: happy},
  //     {dog: sad}
  //   ],
  //   [
  //     {house: brick},
  //     {car: iron}
  //   ]
  // ]

  var callback = function(bucket, i, storage) {
    console.log(bucket);
    for ( var i = 0; i < bucket.length; i++ ) {
      if ( bucket[i][k] ) {
        bucket[i][k] = undefined;
      }
    }
    // array[index] = undefined;
  };

  this._storage.each(callback);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


