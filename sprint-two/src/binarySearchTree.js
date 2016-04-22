var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.root = null;
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var bstMethods = {
  insert: function(value) {
    var bst = BinarySearchTree(value);
    if (this.value > value) {
      if (!this.left) {
        this.left = bst;
        this.left.root = this;
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (!this.right) {
        this.right = bst;
        this.right.root = this;
      } else {
        this.right.insert(value);
      }
    }
  },
  contains: function(value) {
    if (this.value === value) {
      return true;
    }
    if (this.value > value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(value);
    } else {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(value);
    }
  },
  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
