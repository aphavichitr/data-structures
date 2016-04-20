var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    for ( var key in storage ) {
      storage[key - 1] = storage[key];
    }
    delete storage[tail - 1];
    tail--;
    return dequeued;
  };

  someInstance.size = function() {
    return tail < 0 ? 0 : tail;
  };

  return someInstance;
};
