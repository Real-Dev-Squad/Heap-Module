const Heap = require('../src/heap');

let array = [102, 30, 23, 17, 18, 9, 44, 12, 31];

const minHeap = new Heap();
const maxHeap = new Heap('max');
const maxHkeyHeap = new Heap('max', 'a');
const minHkeyHeap = new Heap(undefined, 'a');

minHeap.buildHeap(array);
console.log(minHeap.container);
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.isEmpty);
console.log(minHeap.getTop());

maxHeap.buildHeap(array);
console.log(maxHeap.container);
console.log(maxHeap.remove());
console.log(maxHeap.remove());
console.log(maxHeap.isEmpty);
console.log(maxHeap.getTop());

let arr = [102, 30, 23, 17, 18, 9, 44, 12, 31].map((x) => ({
    'a': x
}))
maxHkeyHeap.buildHeap(arr);
console.log(maxHkeyHeap.container);
console.log(maxHkeyHeap.remove());
console.log(maxHkeyHeap.remove());
console.log(maxHkeyHeap.isEmpty);
console.log(maxHkeyHeap.getTop());

minHkeyHeap.buildHeap(arr);
console.log(minHkeyHeap.container);
console.log(minHkeyHeap.remove());
console.log(minHkeyHeap.remove());
console.log(minHkeyHeap.isEmpty);
console.log(minHkeyHeap.getTop());