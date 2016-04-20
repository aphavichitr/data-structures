var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {length: 0};
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  size: function() {
    return this.length < 0 ? 0 : this.length;
  },
  enqueue: function(value) {
    this[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    var dequeued = this[0];
    for (var key in this) {
      this[key - 1] = this[key];
    }
    delete this[this.length - 1];
    this.length--;
    return dequeued;
  }
};


