'use strict';

var Stack = (function () {
  function Stack() {
    this.top = 0;
    this.stack = new Array();
  }

  Stack.prototype.push = function (value) {
    this.stack[this.top] = value;
    this.top += 1;
  };

  Stack.prototype.pop = function () {
    if (this.top === 0) {
      throw 'Stack is Empty';
    }

    this.top -= 1;
    var result = this.stack[this.top];
    delete this.stack[this.top];
    return result;
  };

  Stack.prototype.size = function () {
    return this.top;
  };

  Stack.prototype.peek = function () {
    return this.stack[this.top - 1];
  };

  Stack.prototype.view = function () {
    for (var i = 0; i < this.top; i += 1) {
      console.log(this.stack[i]);
    }
  };

  return Stack;

} ());

var myStack = new Stack();

myStack.push(1);
myStack.push(5);
myStack.push(76);
myStack.push(69);
myStack.push(32);
myStack.push(54);
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push(55);
console.log(myStack.peek());
myStack.view();
