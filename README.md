Heap Module

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About

A heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property. Each node in heap represents element/data.

Heaps are usually implemented using array where each element represents a tree node whose parent/children relationship is defined implicitly by their index.

- Each node in a heap consist of data and is stored in array at index n.
- Parent node is sotred at index 0 and its children at index 1 and index 2, children of index 1 are stored at index 3 and index 4, and so on.
- In a 0 index based array
  - If `n` is the parent node index,
    - It's left child is at index `(2n + 1)`
    - It's right child is at index `(2n + 2)`
  - If `n` is the child node index,
    - It's parent is at `((n - 1) / 2)` (Flored)
- Root node is the entry point to the heap i.e, Index 0 in array.
- If an element is inserted or deleted from a heap, the heap property is violated and the heap must be balanced by swapping elements within the array.
-

## Getting Started

_To be filled_

### Prerequisites

JavaScript enviornment

### Installing

Install the Heap module package from npm registry

```bash
npm i <repo>/Heap-Module
```

Require the module in the file where you want to use either using require or import syntax

```js
const heap = require('Heap-Module');
```

```js
import heap from 'Heap-Module';
```

## Usage

Heap-Module helps you to include heap in your JavaScript code. It is 0-indexed based heap.

API Reference

|    Function    |                 Description                  |
| :------------: | :------------------------------------------: |
| `create(type)` |    Create an empty heap of specified type    |
|  `add(node)`   |            Adds new node to heap             |
|    `get()`     | Get the max or min element based on the type |
|    `length`    |         Number of nodes in the heap          |
|   `print()`    |           Prints the heap element            |

## `create(type)`

The `create(type)` function creates an empty heap of specified type. If type = min then min heap is created where the parent node is smaller then it's children nodes, else if type = max then max heap is created where the parent node is larger than it's children.

#### Parameters

create accepts one parameters, which has two values ('min', 'max')

1. `Type` - This specifies the type of heap to be created i.e, min or hax heap.

##### Usage

`heap.create('min')` -- creates an empty min heap

`heap.create('max')` -- creates an empty max heap

## `add(node)`

The `add(node)` function adds the node to the heap.

#### Parameters

add accepts one parameter

1. `node` - This specifies the data that is to be stored in heap.

##### Usage

`heap.add(node)`

## `get()`

The `get()` function returns the root node. It accepts no parameter,


##### Usage

`heap.get()`

## `length`

The length property present for heap returns the current number of nodes of heap.

##### Usage

heap.length

## `print()`

The print() method displays the nodes of the heap. It takes no parameter.

##### Usage

`heap.print()`
