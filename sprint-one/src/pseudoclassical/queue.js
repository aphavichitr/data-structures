var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this[0];
  for ( var key in this ) {
    this[key - 1] = this[key];
  }
  delete this[this.tail];
  this.tail--;
  return dequeued;
};

Queue.prototype.size = function() {
  return this.tail < 0 ? 0 : this.tail;
};
