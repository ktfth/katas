'use strict';

var Queue = (function () {
  function Queue() {
    this.queue = [];
  }

  Queue.prototype.enqueue = function (item) {
    this.queue[this.queue.length] = item;
  };

  Queue.prototype.dequeue = function () {
    if (this.queue.length === 0) {
      throw 'Queue is Empty';
    }

    var result = this.queue[0];
    this.queue.splice(0, 1);

    return result;
  };

  Queue.prototype.length = function () {
    return this.queue.length;
  };

  Queue.prototype.peek = function () {
    return this.queue[0];
  };

  Queue.prototype.view = function () {
    console.log(this.queue);
  };

  return Queue;

} ());

var myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(5);
myQueue.enqueue(76);
myQueue.enqueue(69);
myQueue.enqueue(32);
myQueue.enqueue(54);

myQueue.view();

console.log('Length: ' + myQueue.length());
console.log('Front item: ' + myQueue.peek());
console.log('Removed ' + myQueue.dequeue() + ' from front.');
console.log('New front item: ' + myQueue.peek());
console.log('Removed ' + myQueue.dequeue() + ' from front.');
console.log('New front item: ' + myQueue.peek());
myQueue.enqueue(55);
console.log('Inserted 55');
console.log('New front item: ' + myQueue.peek());

for (var i = 0; i < 5; i += 1) {
  myQueue.dequeue();
  myQueue.view();
}

// console.log(myQueue.dequeue()); // throws exception!
