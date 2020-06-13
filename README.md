Heap Module

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>
 A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types:
Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
Write about 1-2 paragraphs describing the purpose of your project.

## Getting Started <a name = "getting_started"></a>


### Prerequisites

Javascript enviornment

### Installing

Install the heap module package from mpm registry
npm i heap-dev-squad
Require the module in the file where you want to use either using require or import syntax
var heap = require('heap-dev-squad');

## Usage <a name = "usage"></a>

 Create heap: const heap =  new Heap(type, hkey) 

  -> creates a max-heap if type = 'max'

  -> creates a min-heap if type = 'min';  //If type is not passed by default it creates min heap 
  
  -> hkey indicates the common key which has to be included in comparison, if the elements are objects. If key is not present it is treated as undefined.

 Insert : heap.insert(value)

  -> Inserts value into heap

 Remove : heap.remove() 

  -> Removes the root element and returns it. In max heap maximum element is returned, in min heap minimum element is returned.

isEmpty : heap.isEmpty()
  
  -> returns boolean indicating if the heap is empty

type : heap.type 

  -> returns string denoting type of heap (Min or Max heap)

getTop : heap.getTop() 

  -> returns the top element either max or min depending upon type of heap (Peek to root). It does not modify the heap.
