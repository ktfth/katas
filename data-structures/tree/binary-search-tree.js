'use strict';

var Node = (function () {
  function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  };

  Node.prototype.search = function (val) {
    if (this.value == val) {
      return this;
    } else if (val < this.value && this.left != null) {
      return this.left.search(val);
    } else if (val > this.value && this.right != null) {
      return this.right.search(val);
    }
    return null;
  };

  Node.prototype.visit = function () {
    if (this.left != null) {
      this.left.visit();
    }

    console.log(this.value);

    if (this.right != null) {
      this.right.visit()
    }
  };

  Node.prototype.addNode = function (n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addNode(n);
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  };

  return Node;
}());

var Tree = (function () {
  function Tree() {
    this.root = null;
  };

  Tree.prototype.traverse = function () {
    this.root.visit();
  };

  Tree.prototype.search = function (val) {
    let found = this.root.search(val);

    if (found === null) {
      console.log(val + ' not found');
    } else {
      console.log('Found:' + found.value);
    }
  };

  Tree.prototype.addValue = function (val) {
    let n = new Node(val);

    if (this.root == null) {
      this.root = n;
    } else {
      this.root.addNode(n);
    }
  };

  return Tree;
}());

var bst = new Tree();
bst.addValue(6);
bst.addValue(3);
bst.addValue(9);
bst.addValue(2);
bst.addValue(8);
bst.addValue(4);
bst.traverse();
bst.search(8);
