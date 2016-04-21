var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.head = 0;
  storage.tail = 0;
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.tail] = value;
    this.tail++;
  },
  dequeue: function() {
    var dequeued = this[this.head];
    delete this[this.head];
    this.head++;
    return dequeued;
  },
  size: function() {
    var size = this.tail - this.head;
    return size < 0 ? 0 : size;
  }
};


