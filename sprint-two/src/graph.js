

// ------------------------ 
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if ( _.contains(this.nodes[fromNode], toNode ) || _.contains(this.nodes[toNode], fromNode) ) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var newEdges = [];
  for ( var i = 0; i < this.nodes[fromNode].length; i++ ) {
    if ( this.nodes[fromNode][i] !== toNode ) {
      newEdges.push(this.nodes[fromNode][i]);
    }
  }
  this.nodes[fromNode] = newEdges;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(value, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */





















