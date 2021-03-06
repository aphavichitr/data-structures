describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToHead", "addToTail", "removeHead", "removeTail" and "contains"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new head when new nodes are added to head', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should designate a new previous and next values if a node was added to head', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.prev).to.equal(null);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.next.prev.value).to.equal(5);
    expect(doublyLinkedList.head.prev).to.equal(null);
    expect(doublyLinkedList.head.next.next).to.equal(null);
  });

  it('should designate a new tail when new nodes are added to tail', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate new previous and next values if a node was added to tail', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.prev.value).to.equal(4);
    expect(doublyLinkedList.tail.next).to.equal(null);
    expect(doublyLinkedList.tail.prev.next.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(3);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(3);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.removeTail()).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.head.value).to.equal(3);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(3);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(3);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.removeHead()).to.equal(3);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.head.value).to.equal(4);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });
});
