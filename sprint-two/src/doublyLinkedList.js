var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

var Node = function(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  if ( this.head ) {
    node.next = this.head;
    this.head.prev = node;
  }
  if ( !this.tail ) {
    this.tail = node;
  } 
  this.head = node;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if ( this.tail ) {
    node.prev = this.tail;
    this.tail.next = node;
  }
  if ( !this.head ) {
    this.head = node;
  }
  this.tail = node;
};

DoublyLinkedList.prototype.removeTail = function() {
  var oldTailVal = this.tail.value;
  if ( this.tail.prev ) {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  }
  if ( !this.tail.prev ) {
    this.tail = null;
    this.head = null;
  }
  return oldTailVal;
};

DoublyLinkedList.prototype.removeHead = function() {
  var oldHeadVal = this.head.value;
  if ( this.head.next ) {
    this.head.next.prev = null;
    this.head = this.head.next;
  }
  if ( !this.head.next ) {
    this.head = null;
    this.tail = null;
  }
  return oldHeadVal;
};


DoublyLinkedList.prototype.contains = function(value) {

};
