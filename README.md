Heap data structure with following API's (by default min-heap)

1. new Heap('max' , hkey) // generates a max-heap; no arguments defaults it to min heap. hkey indicates the common key which has to be included in comparison if the elements are objects. if key not present treated as undefined.

2. Add : heap.add({"a" : 1 , "b" : 2})
   heap.add({"a" : 110, "d" : 2}) -- here hkey is 'a'

3. Remove : heap.remove() --gives the min or max element according to selected heap

4. isEmpty : heap.isEmpty() -- returns boolean indicating if the heap is empty or not
