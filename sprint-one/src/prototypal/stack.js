var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.length = 0;
  return storage;
};

var stackMethods = {
  push: function(value) {
    this[this.length] = value;
    this.length++;
  },
  pop: function() {
    this.length--;
    var popped = this[this.length];
    delete this[this.length];
    return popped;
  },
  size: function() {
    return this.length < 0 ? 0 : this.length;
  }
};


