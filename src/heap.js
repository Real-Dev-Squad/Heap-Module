// min heap construction // left child , right child , parent
// heap satisfy two condition cbt and it is min or max heap
// min heap every node value min to its children
// max heap every node value max to its children 

//TODO : null case need to be handled if key not found 
//TODO : code is repeating some parts should I make a new function or not 
class Heap {
    constructor(type = "min", hkey = null) {
        this.type = type;
        this.hkey = hkey;
        this.container = [];
    }

    buildHeap(arr) {
        // find the first parent
        this.container = arr.slice();
        let parent = Math.floor((arr.length - 1) / 2);
        let shiftFn = this.shiftDown.bind(this);
        if (this.type === 'max') {
            shiftFn = this.shiftDownMax.bind(this);
        }
        while (parent >= 0) {
            shiftFn(parent);
            parent = parent - 1;
        }
    }



    shiftDownMax(index) {
        // compare with children until no children left
        let parent = index;
        let child1 = 2 * parent + 1;
        while (child1 < this.container.length) {
            let child2 = null;
            let max = null;
            if ((2 * parent + 2) < this.container.length) {
                // child2 exist 
                child2 = 2 * parent + 2;
                if (this.hkey) {
                    // hkey is null 
                    let val1 = this.container[child1][this.hkey] || Number.MIN_SAFE_INTEGER;
                    let val2 = this.container[child2][this.hkey] || Number.MIN_SAFE_INTEGER;
                    max = val1 > val2 ? child1 : child2;
                    if (this.container[parent][this.hkey] < this.container[max][this.hkey]) {
                        this.swap(parent, max);
                    } else return;
                } else {
                    max = this.container[child1] > this.container[child2] ? child1 : child2;
                    if (this.container[parent] < this.container[max]) {
                        this.swap(parent, max);
                    } else return;
                }

            } else {
                // only child1
                if (this.hkey) {
                    if (this.container[parent][this.hkey] < this.container[child1][this.hkey]) {
                        max = child1;
                        this.swap(parent, child1);
                    } else return;

                } else {
                    if (this.container[parent] < this.container[child1]) {
                        max = child1;
                        this.swap(parent, child1);
                    } else return;
                }
            }
            parent = max;
            child1 = 2 * parent + 1;

        }
    }

    shiftDown(index) {
        // compare with children till no children left
        let parent = index;
        let child1 = 2 * parent + 1;
        while (child1 < this.container.length) {
            let child2 = null;
            let min = null;
            if (2 * parent + 2 < this.container.length) {
                // child2 exist
                child2 = 2 * parent + 2;
                if (this.hkey) {
                    min = this.container[child1][this.hkey] < this.container[child2][this.hkey] ? child1 : child2;
                    if (this.container[parent][this.hkey] > this.container[min][this.hkey]) {
                        this.swap(parent, min);

                    } else return;
                } else {
                    min = this.container[child1] < this.container[child2] ? child1 : child2;
                    if (this.container[parent] > this.container[min]) {
                        this.swap(parent, min);
                    } else return;
                }

            } else {
                // no second child
                if (this.hkey) {
                    if (this.container[parent][this.hkey] > this.container[child1][this.hkey]) {
                        this.swap(parent, child1);
                        min = child1;
                    } else return;
                } else {
                    if (this.container[parent] > this.container[child1]) {
                        min = child1;
                        this.swap(parent, child1);
                    } else return;
                }
            }
            parent = min;
            child1 = 2 * parent + 1;
        }
    }
    swap(i1, i2) {
        let temp = this.container[i1];
        this.container[i1] = this.container[i2];
        this.container[i2] = temp;
    }

    insert(value) {
        this.container.push(value);
        let shiftFn = this.shiftUp.bind(this);
        if (this.type === 'max') {
            shiftFn = this.shiftUpMax.bind(this);
        }
        shiftFn(this.container.length - 1);
    }

    shiftUp(index) {
        // compare with parent
        let parent = Math.floor((index - 1) / 2);
        while (parent >= 0) {
            if (this.hkey) {
                if (this.container[parent][this.hkey] > this.container[index][this.hkey]) {
                    this.swap(parent, index);
                    index = parent;
                    parent = Math.floor((parent - 1) / 2);
                } else return;
            } else {
                if (this.container[parent] > this.container[index]) {
                    this.swap(parent, index);
                    index = parent;
                    parent = Math.floor((parent - 1) / 2);
                } else {
                    return;
                }
            }

        }
    }

    shiftUpMax(index) {
        // compare with parent 
        let parent = Math.floor((index - 1) / 2);
        while (parent >= 0) {
            if (this.hkey) {
                if (this.container[parent][this.hkey] < this.container[index][this.hkey]) {
                    this.swap(parent, index);
                    parent = Math.floor((parent - 1) / 2);
                } else return;
            } else {
                // no hkey 
                if (this.container[parent] < this.container[index]) {
                    this.swap(parent, index);
                    parent = Math.floor((parent - 1) / 2);
                } else return;
            }
        }

    }

    remove() {
        this.swap(0, this.container.length - 1);
        let top = this.container.pop();
        let shiftFn = this.shiftDown.bind(this);
        if (this.type === 'max') {
            shiftFn = this.shiftDownMax.bind(this);
        }
        shiftFn(0);
        return top;
    }

    getTop() {
        if (this.hkey) {
            return this.container.length ? this.container[0][this.hkey] : "invalid operation on empty heap";
        } else {
            return this.container.length ?
                this.container[0] :
                "invalid operation on empty heap";

        }

    }

    get isEmpty() {
        return !this.container.length ? true : false;
    }
}

module.exports = Heap;