

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var callback = function(bucket, i, storage) {
    if ( index === i ) {
      for ( var i = 0; i < bucket.length; i++ ) {
        if ( bucket[i][0] === k ) {
          bucket[i][1] = v;
        }
      }
    }
  };

  if ( this.retrieve(k) ) {
    this._storage.each(callback);
  } else {
    var bucket = this._storage.get(index) || [];
    var tuple = [k, v];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if ( bucket ) {
    for ( var i = 0; i < bucket.length; i++ ) {
      if ( bucket[i][0] === k ) {
        return bucket[i][1];
      }
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var callback = function(bucket, i, storage) {
    if ( index === i ) {
      for ( var i = 0; i < bucket.length; i++ ) {
        if ( bucket[i][0] === k ) {
          bucket[i][1] = undefined;
        }
      }
    }
  };

  this._storage.each(callback);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


