'use strict';

var LinkedList = (function () {
  function LinkedList() {
    this.length = 0;
    this.head = null;
  }

  var Node = (function () {
    function Node(element) {
      this.element = element;
      this.next = null;
    }
    return Node;
  }());

  LinkedList.prototype.size = function () {
    return this.length;
  };

  LinkedList.prototype.head = function () {
    return this.head;
  };

  LinkedList.prototype.add = function (element) {
    var node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      var currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length += 1;
  };

  LinkedList.prototype.remove = function (element) {
    var currentNode = this.head;
    var previousNode;

    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    this.length -= 1;
  };

  LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  LinkedList.prototype.indexOf = function (element) {
    var currentNode = this.head;
    var index = -1;

    while (currentNode) {
      index += 1;

      if (currentNode.element === element) {
        return index + 1;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  LinkedList.prototype.elementAt = function (index) {
    var currentNode = this.head;
    var count = 0;

    while (count < index) {
      count += 1;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  };

  LinkedList.prototype.addAt = function (index, element) {
    index -= 1;
    var node = new Node(element);

    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;

    if (index > this.length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    this.length += 1;
    return true;
  };

  LinkedList.prototype.removeAt = function (index) {
    index -= 1;
    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;

    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this.length -= 1;
    return currentNode.element;
  };

  LinkedList.prototype.view = function () {
    var currentNode = this.head;
    var count = 0;

    while (count < this.length) {
      count += 1;
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  };

  return LinkedList;
}());

var linklist = new LinkedList();
linklist.add(2);
linklist.add(5);
linklist.add(8);
linklist.add(12);
linklist.add(17);
console.log(linklist.size());
console.log(linklist.removeAt(4));
linklist.addAt(4, 15);
console.log(linklist.indexOf(8));
console.log(linklist.size());
linklist.view();
