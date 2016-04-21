var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var head = this.head.value;
    this.head = this.head.next;
    return head;
  };

  list.contains = function(target) {
    return _.reduce(this, function(wasFound, node) {
      return wasFound || node.value === target;
    }, false);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
