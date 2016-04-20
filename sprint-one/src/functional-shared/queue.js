var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {tail: 0};
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  size: function() {
    return this.tail < 0 ? 0 : this.tail;
  },
  enqueue: function(value) {
    this[this.tail] = value;
    this.tail++;
  },
  dequeue: function() {
    var dequeued = this[0];
    for (var key in this) {
      this[key - 1] = this[key];
    }
    delete this[this.tail - 1];
    this.tail--;
    return dequeued;
  }
};


