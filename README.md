Heap data structure with following API's (by default min-heap)

1. new Heap('max' , hkey) // generates a max-heap; no arguments defaults it to min heap. hkey indicates the common key which has to be included in comparison if the elements are objects. if key not present treated as undefined.

2. Insert : heap.insert(value)
  

3. Remove : heap.remove() --gives the min or max element according to selected heap

4. isEmpty : heap.isEmpty -- returns boolean indicating if the heap is empty or not

5. type : heap.type -- returns string denoting type of heap

6. getTop : heap.getTop() -- returns the top element either max or min depending upon type of heap
