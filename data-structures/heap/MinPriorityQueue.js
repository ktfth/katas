'use strict';

class MinPriorityQueue {
  constructor(c) {
    this.heap = [];
    this.capacity = c;
    this.size = 0;
  }

  insert(key) {
    if (this.isFull()) return;
    this.heap[this.size + 1] = key;
    let k = this.size + 1;
    while (k > 1) {
      if (this.heap[k] < this.heap[Math.floor(k / 2)]) {
        let temp = this.heap[k];
        this.heap[k] = this.heap[Math.floor(k / 2)];
        this.heap[Math.floor(k / 2)] = temp;
      }
      k = Math.floor(k / 2);
    }
    this.size += 1;
  }

  peek() {
    return this.heap[1];
  }

  isEmpty() {
    if (0 === this.size) return true;
    return false;
  }

  isFull() {
    if (this.size == this.capacity) return true;
    return false;
  }

  print() {
    console.log(this.heap.slice(1));
  }

  heapSort() {
    for (let i = 1; i < this.capacity; i += 1) {
      this.delete();
    }
  }

  sink() {
    let k = 1;
    while (2 * k <= this.size || 2 * k + 1 <= this.size) {
      let minIndex;
      if (this.heap[2 * k] >= this.heap[k]) {
        if (2 * k + 1 <= this.size && this.heap[2*k+1] >= this.heap[k]) {
					break;
				}
				else if(2*k+1 > this.size){
					break;
				}
      }
      if (2 * k + 1 > this.size) {
        minIndex = this.heap[2 * k] < this.heap[k] ? 2 * k : k;
      } else {
        if (
          this.heap[k] > this.heap[2 * k] ||
          this.heap[k] > this.heap[2 * k + 1]
        ) {
          minIndex =
            this.heap[2 * k] < this.heap[2 * k + 1] ? 2 * k : 2 * k + 1;
        } else {
          minIndex = k;
        }
      }
      let temp = this.heap[k];
      this.heap[k] = this.heap[minIndex];
      this.heap[minIndex] = temp;
      k = minIndex;
    }
  }

  delete() {
    let min = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.heap[this.size] = min;
    this.size -= 1;
    this.sink();
    return min;
  }
}

let q = new MinPriorityQueue(8);

q.insert(5);
q.insert(2);
q.insert(4);
q.insert(1);
q.insert(7);
q.insert(6);
q.insert(3);
q.insert(8);
q.print();
q.heapSort();
q.print();
